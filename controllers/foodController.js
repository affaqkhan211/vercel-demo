import Food from "../models/foodModel.js";

// Function to create a new food item
export const createFood = async (req, res) => {
  const { foodTitle, description, img, category, price } = req.body;

  // Validate input
  if (!foodTitle || !description || !img || !category || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new food item
    const newFood = new Food({
      foodTitle,
      description,
      img,
      category,
      price
    });

    // Save the food item to the database
    const savedFood = await newFood.save();

    // Respond with the newly created food item
    res.status(201).json(savedFood);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ message: error.message });
  }
};


// Function to get all food items
export const getAllFoods = async (req, res) => {
    try {
        // Fetch all food items from the database
        const foods = await Food.find();
        // Respond with the list of food items
        res.status(200).json(foods);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: error.message });
    }
};


// controllers/foodController.js


export const foodDetail = async (req, res) => {
    try {
        const { id } = req.params;
        // Find the food item by its ID
        const food = await Food.findById(id);

        // If food is not found, return a 404 status
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }

        // Respond with the food item
        res.status(200).json(food);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.message });
    }
};

export const updateFood = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;

      // Find the food item by its ID and update it with the new data
      const updatedFood = await Food.findByIdAndUpdate(id, updatedData, { new: true });

      // If food item not found, return 404
      if (!updatedFood) {
          return res.status(404).json({ message: 'Food not found' });
      }

      // Respond with the updated food item
      res.status(200).json(updatedFood);
  } catch (error) {
      // Handle any errors
      res.status(500).json({ message: error.message });
  }
};

// Delete food item by ID
export const deleteFood = async (req, res) => {
  try {
      const { id } = req.params;

      // Find the food item by its ID and delete it
      const deletedFood = await Food.findByIdAndDelete(id);

      // If food item not found, return 404
      if (!deletedFood) {
          return res.status(404).json({ message: 'Food not found' });
      }

      // Respond with a success message
      res.status(200).json({ message: 'Food deleted successfully' });
  } catch (error) {
      // Handle any errors
      res.status(500).json({ message: error.message });
  }
};

