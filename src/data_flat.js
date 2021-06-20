/* each array of objects separate table? */
/* contributors - short arrays converted to string, parsed on recieve? */
/* separate IDs for different kinds of arrays */
const date = new Date()
const dateString = `${date.getDay()}. ${date.getMonth()}. ${date.getFullYear()} `
export const FlatData = {
	dialog: {
		show: false/* ack, bin. txt */
	},
	selectedProject: 0,
	projects: [
		{name: 'Alpha One', created: dateString, owner: 'alpha', contributors: 'Anna, Rhod, Amelia', ico: "plane", projectID: 1},
		{name: 'Beta Two', created: dateString, owner: 'Jan', contributors: 'Sasha, Tyis', ico: "boat", projectID: 2},
		{name: 'Tres Pesos', created: dateString, owner: 'Rach', contributors: 'Anna, Rhod, Amelia', ico: "medal", projectID: 3},
	],

	tasks: [
		{projectID: 1, name: 'task number one', taskID: 1},
		{projectID: 1, name: 'task number two', taskID: 2},
		{projectID: 2, name: 'assignment 1', taskID: 3},
		{projectID: 2, name: 'assignment 2', taskID: 4},
		{projectID: 2, name: 'assignment 3', taskID: 5},
		{projectID: 3, name: 'task tres', taskID: 6},
	],

	steps: [
		{taskID: 1, id: '00001', done: true, name: 'Lorem', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 2, id: '00002', done: false, name: 'Ipsum', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 3, id: '00003', done: false, name: 'Dolor', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 4, id: '00004', done: true, name: 'met sit amet',  notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 4, id: '00005', done: true, name: 'something', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 4, id: '00006', done: true, name: 'fuck', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 4, id: '00010', done: true, name: 'met sit amet',  notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 4, id: '00011', done: true, name: 'something', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 4, id: '00012', done: true, name: 'fuck', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 5, id: '00007', done: false, name: 'twat', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 5, id: '00008', done: false, name: 'bitch', notes: ["note to description one", "second note, a nit longer..."]},
		{taskID: 6, id: '00009', done: false, name: 'arse', notes: ["note to description one", "second note, a nit longer..."]},
	]

}