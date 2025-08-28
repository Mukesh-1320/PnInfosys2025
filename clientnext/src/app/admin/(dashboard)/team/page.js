'use client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useCreateTeamMutation,useDeleteTeamMutation,useGetAllTeamQuery, useUpdateTeamMutation } from '../../../../../redux/features/team/teamApi';
import TeamModel from '@/component/about/TeamModel';





export default function ManageTeam() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetAllTeamQuery();
  console.log('Fetched Team:', data);
  const team = data?.team || [];

  const [createTeam] = useCreateTeamMutation();
  const [updateTeam] = useUpdateTeamMutation();
  const [deleteTeam] = useDeleteTeamMutation();

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
    setFormData({ name: '', position: '', image: null });
    setPreview(null);
    setEditId(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('position', formData.position);
    if (formData.image) data.append('image', formData.image);

    try {
      if (editId) {
        await updateTeam({ id: editId, formData: data }).unwrap();
        toast.success('Team updated');
      } else {
        await createTeam(data).unwrap();
        toast.success('Team created');
      }
      resetForm();
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const handleEdit = (team) => {
    setFormData({
      name: team.name,
      position: team.position,
      image: null,
    });
    setPreview(team.image);
    setEditId(team._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteTeam(id).unwrap();
        toast.success('Deleted successfully');
      } catch (err) {
        toast.error('Failed to delete');
      }
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">📂 Manage Team</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          + Add Team Member
        </button>
      </div>

      {/* All team */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded shadow-sm">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Position</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {team.map((team, index) => (
                <tr key={team._id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={team.image.url}
                      alt={team.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 text-gray-800">{team.name}</td>
                  <td className="p-3 text-gray-800 ">{team.position}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(team)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(team._id)}
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
      <TeamModel
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
