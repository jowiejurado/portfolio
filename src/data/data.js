const data = {
	skills: () => import("./skills.json").then((module) => module.default),
	tools: () => import("./tools.json").then((module) => module.default),
	works: () => import("./work.json").then((module) => module.default),
};

export const getData = (key) => {
	return data[key]();
};
