import Restaurant from "@/models/restaurant";

export default class Meal {
  constructor(id, name, description, profileImage, images) {
    this.id = id
    this.name = name
    this.description = description
    this.profileImage = profileImage
    this.images = images
    this.restaurant = Restaurant
  }
}
