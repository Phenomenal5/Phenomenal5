import Category from "../models/category.js"



// create category
export const createCategory = async (req, res) => {
    const {name} = req.body;
    try {
        if(!name) return res.status(400).json({message: "Name required"})

        const existingCat = await Category.findOne({name})

        if(existingCat) return res.status(400).json({message: "category already exisit"})

        const category = await Category.create({name})

        return res.status(201).json({message : "Category created successfully", category})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}

// get all category

export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find()

        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}



// update category
export const updateCategory = async (req, res) => {
    const {categoryId} = req.params
    const {name} = req.body;
    try {
        if(!name) return res.status(400).json({message: "Name required"})

        const existingCat = await Category.findByIdAndUpdate(categoryId, {name}, {new: true})


        return res.status(200).json({message : "Category updated successfully", existingCat})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}


// Delete catagory
export const deleteCategory = async (req, res) => {
    const {categoryId} = req.params
    try {
        const existingCat = await Category.findByIdAndDelete(categoryId)


        return res.status(200).json({message : "Category deleted successfully"})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}