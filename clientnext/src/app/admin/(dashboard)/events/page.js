'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';
import EventModel from '@/component/EventModel';
import { useCreateEventsMutation, useDeleteEventsMutation, useGetAllEventsQuery, useUpdateEventsMutation } from '../../../../../redux/features/events/eventsApi';



export default function ManageEventsPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetAllEventsQuery();
  console.log('Fetched Events:', data);
  const events = data?.events || [];

  const [createEvents] = useCreateEventsMutation();
  const [updateEvents] = useUpdateEventsMutation();
  const [deleteEvents] = useDeleteEventsMutation();

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', image: null });
    setPreview(null);
    setEditId(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.image) data.append('image', formData.image);

    try {
      if (editId) {
        await updateEvents({ id: editId, formData: data }).unwrap();
        toast.success('Events updated');
      } else {
        await createEvents(data).unwrap();
        toast.success('Events created');
      }
      resetForm();
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const handleEdit = (events) => {
    setFormData({
      title: events.title,
      description: events.description,
      image: null,
    });
    setPreview(events.image);
    setEditId(events._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteEvents(id).unwrap();
        toast.success('Deleted successfully');
      } catch (err) {
        toast.error('Failed to delete');
      }
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">📂 Manage Events</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          + Add Events
        </button>
      </div>

      {/* All Events */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded shadow-sm">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Description</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((events, index) => (
                <tr key={events._id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={events.image.url}
                      alt={events.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 text-gray-800">{events.title}</td>
                  <td className="p-3 text-gray-800 ">{events.description}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(events)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(events._id)}
                      className="bg-red-500 hover:bg-red-600 text-black px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Tech Modal */}
      <EventModel
        isOpen={isModalOpen}
        closeModal={resetForm}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        preview={preview}
      />
    </div>
  );
}
