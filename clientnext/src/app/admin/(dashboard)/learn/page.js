'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';
import { useCreateLearnMutation, useDeleteLearnMutation, useGetAllLearnQuery, useUpdateLearnMutation } from '../../../../../redux/features/learn/learnApi';
import LearnModel from '@/component/training/LearnModel';




export default function ManageLearnPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetAllLearnQuery();
  console.log('Fetched Learn:', data);
  const learn = data?.learn || [];

  const [createLearn] = useCreateLearnMutation();
  const [updateLearn] = useUpdateLearnMutation();
  const [deleteLearn] = useDeleteLearnMutation();

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
        await updateLearn({ id: editId, formData: data }).unwrap();
        toast.success('Learn updated');
      } else {
        await createLearn(data).unwrap();
        toast.success('Learn created');
      }
      resetForm();
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const handleEdit = (learn) => {
    setFormData({
      title: learn.title,
      description: learn.description,
      image: null,
    });
    setPreview(learn.image);
    setEditId(learn._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteLearn(id).unwrap();
        toast.success('Deleted successfully');
      } catch (err) {
        toast.error('Failed to delete');
      }
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">📂 Manage what you learn</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          + Add Learn
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
              {learn.map((learn, index) => (
                <tr key={learn._id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={learn.image.url}
                      alt={learn.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 text-gray-800">{learn.title}</td>
                  <td className="p-3 text-gray-800 ">{learn.description}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(learn)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(learn._id)}
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
      <LearnModel
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
