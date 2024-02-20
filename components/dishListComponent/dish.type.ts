export interface DishType {
    dish_id: string
    dish_name: string
    dish_price: number
    dish_image: string
    dish_currency: string
    dish_calories: number
    dish_description: string
    dish_Availability: boolean
    dish_Type: number
    nexturl: string
    addonCat: AddonCat[]
  }
  
  export interface AddonCat {
    addon_category: string
    addon_category_id: string
    addon_selection: number
    nexturl: string
    addons: Addon[]
  }
  
  export interface Addon {
    dish_id: string
    dish_name: string
    dish_price: number
    dish_image: string
    dish_currency: string
    dish_calories: number
    dish_description: string
    dish_Availability: boolean
    dish_Type: number
  }
  