export const Data = {
	projects: [
		{
			name: "some other name",
			created: "42. 32. 2023",
			owner: "Jan",
			contributors: ['Anna', 'Rhod', 'Amelia'],
			ico: "plane",
			tasks: [
				{
					name: "task one",
					steps: [
						{
							description: "description of taskda sad asd agdg sd",
							done: true,
							notes: ["note to description one"],
						},
					],
				},
				{
					name: "task two",
					steps: [
						{
							description: "description of task",
							done: true,
							notes: ["note to description one"],
						},
						{
							description: "description of task",
							done: false,
							notes: ["note to description one", "second note, a nit longer..."],
						},
						{
							description: "description of task",
							done: true,
							notes: ["note to description one"],
						},
					],
				},
				{
					name: "task whatever",
					steps: [
						{
							description: "description of task",
							done: true,
							notes: ["note to description one"],
						},
						{
							description: "description of task",
							done: false,
							notes: ["note to description one"],
						},
					],
				},
				{
					name: "task seven",
					steps: [
						{
							description: "description of task",
							done: true,
							notes: ["note to description one"],
						},
						{
							description: "description of task",
							done: true,
							notes: ["note to description one"],
						},
					],
				},
			],
		}
	],
};
