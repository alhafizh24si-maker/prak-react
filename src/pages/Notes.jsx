import React, { useState, useEffect } from "react";
import { notesAPI } from "../services/notesAPI";
import { AiFillDelete } from "react-icons/ai";

// Mengimport komponen pendukung
import GenericTable from "../components/GenericTable"; 
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

// Import komponen Badge dari shadcn/ui
import { Badge } from "@/components/ui/badge"; 

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data || []);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote(dataForm);
      setSuccess("Catatan berhasil ditambahkan!");
      setDataForm({ title: "", content: "" });

      setTimeout(() => setSuccess(""), 3000);
      
      const data = await notesAPI.fetchNotes();
      setNotes(data || []);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setIsSubmitting(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);
      setSuccess("Catatan berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);

      const data = await notesAPI.fetchNotes();
      setNotes(data || []);
    } catch (err) {
      setError(`Terjadi kesalahan saat menghapus: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        {/* Header App dengan Badge Total */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
            <p className="text-sm text-gray-500">Kelola catatan harian Anda dengan mudah</p>
          </div>
          {/* Badge 1: Menampilkan total seluruh catatan di pojok kanan atas */}
          <Badge variant="outline" className="text-sm px-3 py-1 bg-gray-50">
            Total: {notes.length} Catatan
          </Badge>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Tambah Catatan Baru
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={dataForm.title}
              placeholder="Judul catatan"
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            />

            <textarea
              name="content"
              value={dataForm.content}
              placeholder="Isi catatan"
              onChange={handleChange}
              required
              rows="2"
              disabled={isSubmitting}
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                duration-200 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200 shadow-lg"
            >
              {isSubmitting ? "Mohon Tunggu..." : "Tambah Data"}
            </button>
          </form>
        </div>

        {/* Bagian Notes Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Daftar Catatan
            </h3>
            {/* Badge 2: Memberikan penanda jumlah item di atas tabel */}
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
              {notes.length} Item
            </Badge>
          </div>

          {/* Kondisi 1: Sedang Loading Pengambilan Data Awal */}
          {loading && <LoadingSpinner text="Memuat catatan..." />}

          {/* Kondisi 2: Data Kosong & Tidak Sedang Loading */}
          {!loading && notes.length === 0 && (
            <EmptyState text={error ? "Gagal memuat data. Sila cek koneksi Anda." : "Belum ada catatan. Tambah catatan pertama!"} />
          )}

          {/* Kondisi 3: Data Berhasil Dimuat */}
          {!loading && notes.length > 0 && (
            <GenericTable
              columns={["#", "Judul", "Isi Catatan", "Aksi"]}
              data={notes}
              renderRow={(note, index) => (
                <>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-emerald-600">
                      {note.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">
                      {note.content}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleDelete(note.id)}
                      disabled={isSubmitting || loading}
                      title="Hapus Catatan"
                      className="p-1 rounded-full hover:bg-red-50 transition-colors disabled:opacity-50"
                    >
                      <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                    </button>
                  </td>
                </>
              )}
            />
          )}
        </div>
      </div>

      {/* Alert Box Rendering */}
      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}
    </>
  );
}

function AlertBox({ type, children }) {
  const isError = type === "error";
  return (
    <div
      className={`fixed bottom-5 right-5 p-4 rounded-xl shadow-lg text-sm text-white transition-all duration-300 z-50 ${
        isError ? "bg-red-500" : "bg-emerald-500"
      }`}
    >
      {children}
    </div>
  );
}