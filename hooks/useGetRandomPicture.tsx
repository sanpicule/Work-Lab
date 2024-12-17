import axios from 'axios'

export const getPhotoData = async () => {
  try {
    const res = await axios.get('https://api.unsplash.com/search/photos?query=cat&client_id=_-mpUtR63-sGqbFmXpC3qv1PId82YkRW_VDALdeOp8M')
    return res.data.results[0]?.urls?.regular
  } catch (error) {
    console.error('Failed to fetch photo:', error)
    return null
  }
}