export const getGoals = (req, res) => {
	res.status(200).json({ message: "get" });
};

export const setGoals = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
	res.status(200).json({ message: "Set Goals" });
};

export const updateGoals = (req, res) => {
	res.status(200).json({ message: `update goal ${req.params.id}` });
};

export const deleteGoals = (req, res) => {
	res.status(200).json({ message: `delete goal ${req.params.id}` });
};
