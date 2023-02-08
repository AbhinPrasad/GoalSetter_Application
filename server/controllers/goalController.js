export const getGoals = (req, res) => {
	res.status(200).json({ message: "get" });
};

export const setGoals = (req, res) => {
	res.status(200).json({ message: "set" });
};

export const updateGoals = (req, res) => {
	res.status(200).json({ message: `update goal ${req.params.id}` });
};

export const deleteGoals = (req, res) => {
	res.status(200).json({ message: `delete goal ${req.params.id}` });
};
