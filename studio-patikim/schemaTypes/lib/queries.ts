export const RECIPES_QUERY = `*[_type == "recipe" && name match $search]{
  _id,
  name,
  description,
  ingredients,
  instructions,
  "imageUrl": image.asset->url
}`
