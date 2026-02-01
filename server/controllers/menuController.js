import MenuItem from "../models/MenuItem.js"

export const getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find()
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const createMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.create(req.body)
    res.status(201).json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const toggleAvailability = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id)

    if (!item) {
      return res.status(404).json({ message: "Menu item not found" })
    }

    item.isAvailable = !item.isAvailable
    await item.save()

    res.json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const updateMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id)
    res.json({ message: "Menu item deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
