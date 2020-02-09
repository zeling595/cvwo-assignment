# Todo.create(title: "Buy food: milk, bread, fruits", done: false)
# Todo.create(title: "Imagine Dragons tickets", done: false)

# Category.create(title: "Groceries")
# Category.create(title: "Entertainment")

Todo.destroy_all
Category.destroy_all

c1 = Category.create({title: "Entertaiment"})
c2 = Category.create({title: "Groceries"})
c1.todos.create({title: "dinner", done: false})
c1.todos.create({title: "movie", done: false})
c1.todos.create({title: "volleyball", done: false})
c2.todos.create({title: "buy milk", done: false})
c2.todos.create({title: "buy banana", done: false})
c2.todos.create({title: "buy apple", done: false})