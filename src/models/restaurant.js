import Meal from "@/models/meal";

export default class Restaurant {
  constructor(id, name, describe, profileImage, images) {
    this.id = id
    this.name = name
    this.describe = describe
    this.profileImage = profileImage
    this.images = images
    this.meals = [new Meal()]
  }
}
