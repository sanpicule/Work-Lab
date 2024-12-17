import { PageType, RichTextType } from '@/types/types'

export const getText = (richTextArray: RichTextType[]) => {
  try {
    const textArr = richTextArray.map((richText) => richText.plain_text)
    return textArr.join('')
  } catch (err) {
    console.log(err)
  }
  return ''
}

export const getCover = (cover: PageType['cover']) => {
  if (cover && cover.file) return cover.file.url
  if (cover && cover.external) return cover.external.url
}

export const getDate = (date: { start: string }) => {
  try {
    return date.start
  } catch (err) {
    console.log(err)
  }
  return '-'
}

export const getMultiSelect = (multiselect: [{ name: string }]) => {
  try {
    return multiselect.map((tag) => tag.name)
  } catch (err) {
    console.log(err)
  }
  return []
}
