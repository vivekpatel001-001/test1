import TaskModel from "../Model/TaskModel.js";
const homecontroller = {
    async create (req, res){
        try {
            const {title , description } = req.body;
            if (!title) {
                res.json({ message: "title is requried " })
            }
            if (!description) {
                res.json({ message: "description is requried " })
            }
            const task = new TaskModel(req.body)
            await task.save();
            res.json({ message: "task created successfully " })

        } catch (error) {
            console.log(error)
        }
    },

    async getall(req, res) {
        const task = await TaskModel.find();
        res.json(task);
    },

    async updateData (req,res) {
        const {id} = req.params;
        const task = await TaskModel.findByIdAndUpdate(id,req.body,{new:true})
        res.json(task); 

    },
    async deleteData (req,res){
        const {id} = req.params;
        const task = await TaskModel.findByIdAndDelete(id);
        res.json(task);
        
    }
    

}
export default homecontroller;

