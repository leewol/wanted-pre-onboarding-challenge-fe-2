/**
 * @file 원티드 프리온보딩 프론트엔드 챌린지 2차 과제 - Todo 앱을 JSDoc으로 문서화하는 과제 root 파일입니다.
 * @author leewol
 * @see <a href="https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa">챌린지 과제 가이드</a>
 */

/**
 * @typedef Todo
 * @type {object}
 * @property {string} id - 아이디
 * @property {string} contents - 내용
 * @property {boolean} isAchieved - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * @typedef Todos
 * @type {object[]}
 */

/**
 * Add a Todo if it has no contents
 * @function
 * @param {object} TodoInput - 사용자가 입력한 Todo 생성 시 input 값
 * @param {string} TodoInput.contents - 사용자가 입력한 내용
 * @param {string} TodoInput.category - 사용자가 입력한 카테고리
 * @param {string[]} [TodoInput.tags] - 사용자가 입력한 태그들
 */

const createTodo = ({ contents = "", category, tags }) => {
 const newTodo = {
  id: uuidv4(),
  contents,
  category,
  isAchieved: false,
  tags,
 };

 Todos.push(newTodo);
};

/**
 * Check all of Todos OR a specific Todo with its ID
 * @function
 * @param {string} [id] - 특정 Todo의 아이디
 * @returns {Todo[]}
 */

const readTodo = (id = "") => {
 // If it has argument(id) check specific one, else check all
 if (id !== "") {
  return Todos.filter((todo) => id === todo.id);
 }
 return Todos;
};

/**
 * Edit tags and properties(without the ID) of a Todo
 * @function
 * @param {string} id - 특정 Todo의 아이디
 * @param {object} TodoUpdateInput - 사용자가 입력한 Todo 생성 시 input 값
 * @param {string} TodoUpdateInput.contents - 사용자가 입력한 내용
 * @param {string} TodoUpdateInput.category - 사용자가 입력한 카테고리
 * @param {string[]} [TodoUpdateInput.tags] - 사용자가 입력한 태그들
 */

const updateTodo = (id, { contents, category, tags = "" }) => {
 for (let i = 0; i < Todos.length; i++) {
  if (id === Todos[i].id) {
   const newTags = tags === "" ? Todos[i].tags : tags;
   const updatedTodo = {
    ...Todos[i],
    contents,
    category,
    tags: newTags,
   };

   Todos[i] = updatedTodo;
   break;
  }
 }
};

/**
 * Delete all of Todos OR a specific Todo with its ID
 * @function
 * @param {string} [id] - 특정 Todo의 아이디
 */

const deleteTodo = (id = "") => {
 // If it has a argument(id) delete specific one, else delete all
 if (id !== "") {
  Todos = Todos.filter((todo) => id !== todo.id);
  return;
 }
 Todos = [];
};

/**
 * Delete all of Todo tags OR a tag of a specific Todo with its ID
 * @function
 * @param {string} id - 특정 Todo의 아이디
 * @param {string} [tag] - 특정 Todo의 tags 중 하나의 tag
 */

const deleteTagsOfTodo = (id, tag = "") => {
 // If it has a argument(tag) delete specific one, else delete all
 for (let i = 0; i < Todos.length; i++) {
  if (id === Todos[i].id) {
   const newTags = Todos[i].tags.filter((oriTag) => oriTag !== tag);
   const updatedTodo = {
    ...Todos[i],
    tags: newTags,
   };

   Todos[i] = updatedTodo;
   break;
  }
 }
};
