# Copyright (c) 2023, CIKKA and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from lms.lms.utils import has_course_instructor_role, has_moderator_role


class LMSAssignment(Document):
	pass
