import axios from 'axios'

const API_URL = "https://tbzteziwgozylpkmzsjs.supabase.co/rest/v1/note"
const API_KEY = "sb_publishable_YXmGQOJ7OKwLKyLlZfiBVQ_ICUjUqfc"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        // Menggunakan sintaks Supabase PostgREST (?id=eq.value)
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return response.data
    }
}