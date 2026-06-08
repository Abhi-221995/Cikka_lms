// Copyright (c) 2022, CIKKA and contributors
// For license information, please see license.txt

frappe.ui.form.on("Course Evaluator", {
	onload: (frm) => {
		frm.set_query("evaluator", function (doc) {
			return {
				filters: {
					ignore_user_type: 1,
				},
			};
		});
	},
});
