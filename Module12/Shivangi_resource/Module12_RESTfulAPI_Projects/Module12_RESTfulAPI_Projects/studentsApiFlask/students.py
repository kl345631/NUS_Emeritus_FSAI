students = [
    {"id":1,"name":"John","course":"Python"},
    {"id":2,"name":"Harry","course":"Java"}
]

def get_all_students():
    return students

def add_student(body):
    body["id"] = students[-1]["id"]+1
    students.append(body)
    return body,201

def update_student(id,body):
    for student in students:
        if student["id"] == id:
            student.update(body)
            return student
    return {"message":"Student not found"},404

def delete_student(id):
    for student in students:
        if student["id"] == id:
            students.remove(student)
            return {"message":"Student deleted"}
    return {"message":"Student not found"},404
        
 
