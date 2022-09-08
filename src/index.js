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
 * Add a Todo if it has no contents
 * @function
 * @param {object} TodoInput - 사용자가 입력한 Todo 생성 시 input 값
 * @param {string} TodoInput.contents - 사용자가 입력한 내용
 * @param {string} TodoInput.category - 사용자가 입력한 카테고리
 * @param {string[]} [TodoInput.tags]
 */

const createTodo = ({ contents = "", category, tags }) => {
  // create Todo
};

/** 
 * Check all of Todos OR a specific Todo with its ID
 * @function
 * @param {string} [id] - 특정 Todo의 아이디
 * @returns {Todo[]}
 */

const readTodo = (id = "") => {
  // read Todo
};

/** 
 * Edit tags and properties(without the ID) of a Todo
 * @function
 * @param {string} id - 특정 Todo의 아이디
 * @param {object} TodoUpdateInput - 사용자가 입력한 Todo 생성 시 input 값
 * @param {string} TodoUpdateInput.contents - 사용자가 입력한 내용
 * @param {string} TodoUpdateInput.category - 사용자가 입력한 카테고리
 * @param {string[]} [TodoUpdateInput.tags]
 */

const updateTodo = (id, TodoUpdateInput) => {
  // update Todo
};

/** 
 * Delete all of Todos OR a specific Todo with its ID
 * @function
 * @param {string} [id] - 특정 Todo의 아이디
 */

const deleteTodo = (id = "") => {
  // delete Todo
};

/**
 * Delete all of Todo tags OR a tag of a specific Todo with its ID
 * @function
 * @param {string} id - 특정 Todo의 아이디
 * @param {string} [tag] - 특정 Todo의 tags 중 하나의 tag
 */

const deleteTagsOfTodo = (id, tag = "") => {
  // delete tags
};