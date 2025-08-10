'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';
import PortModal from '@/component/PortModel';
import { useCreatePortfolioMutation, useDeletePortfolioMutation,useGetAllPortfolioQuery,useUpdatePortfolioMutation } from '../../../../../redux/features/portfolio/portfolioApi';



export default function ManagePortfolioPage() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetAllPortfolioQuery();
  console.log('Fetched Portfolio:', data);
  const portfolio = data?.portfolio || [];

  const [createPortfolio] = useCreatePortfolioMutation();
  const [updatePortfolio] = useUpdatePortfolioMutation();
  const [deletePortfolio] = useDeletePortfolioMutation();

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
    setFormData({ title: '', subtitle: '', image: null });
    setPreview(null);
    setEditId(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('subtitle', formData.subtitle);
    if (formData.image) data.append('image', formData.image);

    try {
      if (editId) {
        await updatePortfolio({ id: editId, formData: data }).unwrap();
        toast.success('Portfolio updated');
      } else {
        await createPortfolio(data).unwrap();
        toast.success('Portfolio created');
      }
      resetForm();
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const handleEdit = (portfolio) => {
    setFormData({
      title: portfolio.title,
      subtitle: portfolio.subtitle,
      image: null,
    });
    setPreview(portfolio.image);
    setEditId(portfolio._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await deletePortfolio(id).unwrap();
        toast.success('Deleted successfully');
      } catch (err) {
        toast.error('Failed to delete');
      }
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">📂 Manage Portfolio</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          + Add Portfolio
        </button>
      </div>

      {/* All Technologies */}
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
                <th className="p-3">Subtitle</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((portfolio, index) => (
                <tr key={portfolio._id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={portfolio.image.url}
                      alt={portfolio.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 text-gray-800">{portfolio.title}</td>
                  <td className="p-3 text-gray-800 ">{portfolio.subtitle}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(portfolio)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(portfolio._id)}
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
      <PortModal
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
