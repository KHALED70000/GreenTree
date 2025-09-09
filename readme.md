# Questions and Answers

# 1. What is the difference between var, let, and const?
Answer to the question No.1:
- var হলো পুরোনো ভাবে variable declare করার system। এটা function scoped এবং একই নাম আবার declare করা যায়।  
- let হলো block scoped এবং একই নাম আবার declare করা যায় না।  
- const হলো block scoped এবং declare করার পর এর value change করা যায় না।  

## 2. What is the difference between map(), forEach(), and filter()?
Answer to the question No.2:
- map() নতুন একটা array return করে যেখানে প্রতিটা element transform হয়।  
- forEach() শুধু loop চালায় কিন্তু নতুন array return করে না।  
- filter() condition অনুযায়ী element বাছাই করে নতুন array return করে।  

# 3. What are arrow functions in ES6?
Answer to the question No.3:
Arrow function হলো function লেখার shortcut syntax যেটা ছোট এবং clean হয়। এগুলোতে `this` আলাদা ভাবে behave করে না, বরং surrounding scope থেকে নেয়।  

# 4. How does destructuring assignment work in ES6?
Answer to the question No.4:
Destructuring assignment হলো একটা shortcut system যেটা দিয়ে object বা array থেকে value সহজে আলাদা আলাদা variable এ রাখা যায়।  


# 5. Explain template literals in ES6. How are they different from string concatenation?
Answer to the question No.5:
Template literals হলো backtick (\`) দিয়ে লেখা string যেখানে variable বা expression সহজে ভিতরে লেখা যায়। এটা সাধারণ string concatenation থেকে আলাদা কারণ এখানে `+` ব্যবহার করতে হয় না আর multiline string সহজে লেখা যায়।  
