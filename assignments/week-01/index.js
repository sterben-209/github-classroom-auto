/**
 * ==============================================================================
 * BÀI TẬP THỰC HÀNH TUẦN 01: JAVASCRIPT ES6+ NỀN TẢNG
 * Chủ đề: let/const/var, Scope, Hoisting, Arrow Functions, Template Literals
 * ==============================================================================
 * 
 * HƯỚNG DẪN:
 * 1. Đọc kỹ yêu cầu đề bài trong assignments/week-01/README.md.
 * 2. Cài đặt các hàm bên dưới theo đúng đặc tả kỹ thuật.
 * 3. Chạy lệnh: `npm test` hoặc `npm run w1` để kiểm tra với bộ test mẫu.
 */

// ==============================================================================
// BÀI 1: ARROW FUNCTIONS, LEXICAL THIS & BẪY SCOPE VÒNG LẶP
// ==============================================================================

/**
 * Tạo một Execution Context đại diện cho một đối tượng thực thi.
 * 
 * @param {string} ownerName - Tên của chủ sở hữu context
 * @returns {object} Đối tượng context chứa các phương thức:
 *   - createHandler(actionName): Trả về một Arrow Function. Khi gọi hàm này,
 *     nó phải trả về chuỗi template literal: `[${actionName}] performed by ${this.ownerName}`.
 *     Đặc biệt: Vì là Arrow Function, dù hàm này có bị tách khỏi object hay gán sang biến
 *     độc lập, lexical this vẫn luôn tham chiếu đúng đến context được tạo ra.
 *     Hàm handler này không thể dùng làm constructor với `new` (nếu dùng `new` sẽ ném TypeError).
 */
function createExecutionContext(ownerName) {
  return {
    ownerName,
    createHandler: function(actionName) {
      return () => {
        return `[${actionName}] performed by ${this.ownerName}`;
      };
    }
  }
}

/**
 * Tạo một mảng gồm `count` hàm xử lý (handlers), giải quyết triệt để bẫy scope vòng lặp.
 * 
 * @param {number} count - Số lượng handler cần tạo (>= 0)
 * @param {string} prefix - Chuỗi tiền tố
 * @returns {Function[]} Mảng gồm `count` hàm. Hàm thứ `i` (từ 0 đến count - 1)
 *   khi được gọi độc lập không truyền tham số PHẢI trả về chuỗi template literal:
 *   `${prefix}-${i}`.
 *   LƯU Ý: Phải sử dụng đúng cơ chế block scope (`let`) hoặc closure để đảm bảo
 *   mỗi hàm ghi nhớ đúng giá trị `i` của vòng lặp tương ứng, không bị bẫy ghi đè biến.
 */
function createBatchHandlers(count, prefix) {
  const handlers = [];
  for(let i = 0; i < count; i++) {
    handlers.push(() => `${prefix}-${i}`);
  }
  
  return handlers;
}

// ==============================================================================
// BÀI 2: TEMPLATE LITERALS & TAGGED TEMPLATES CHUYÊN SÂU
// ==============================================================================

/**
 * Tagged template function dùng để highlight và định dạng an toàn các giá trị nội suy.
 * 
 * @param {TemplateStringsArray} strings - Mảng các chuỗi tĩnh
 * @param {...any} values - Các giá trị nội suy ${...}
 * @returns {string} Chuỗi hoàn chỉnh sau khi ghép các chuỗi tĩnh và giá trị đã xử lý:
 *   - Nếu value là `undefined` hoặc `null`: thay thế bằng chuỗi rỗng `""`.
 *   - Nếu value là số, boolean, chuỗi: bọc giá trị đó trong cặp thẻ `<mark>${value}</mark>`.
 *   - Ghép xen kẽ strings[i] với value[i] theo đúng cơ chế của Tagged Template.
 */
function highlight(strings, ...values) {
  let result = "";
  for(let i = 0; i < strings.length; i++) {
    result += strings[i];
    if(i < values.length) {
      const value = values[i];
      if(value === undefined || value === null) {
        result += ""
      } else if(typeof value === "string" ||
                typeof value === "boolean" ||
                typeof value === "number"
      ) {
        result += `<mark>${value}</mark>`
      } else {
        result += String(value);
      }
    }
  }

  return result;
}

/**
 * Tagged template function xử lý template literal nhiều dòng (multiline string).
 * 
 * @param {TemplateStringsArray} strings - Mảng các chuỗi tĩnh
 * @param {...any} values - Các giá trị nội suy
 * @returns {string} Chuỗi sau khi ghép nối và chuẩn hóa theo quy tắc:
 *   1. Ghép chuỗi tĩnh và giá trị nội suy như template string thông thường.
 *   2. Tách chuỗi thành từng dòng (dựa trên ký tự xuống dòng `\n`).
 *   3. Bỏ qua các dòng trống ở đầu và ở cuối (dòng chỉ chứa khoảng trắng).
 *   4. Xóa khoảng trắng thừa (trim) ở đầu và cuối của mỗi dòng còn lại.
 *   5. Nối các dòng lại với nhau bằng một ký tự `\n`.
 */
function multilineFormat(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += String(values[i] ?? "");
    }
  }

  const lines = result.split("\n");
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }

  while (
    lines.length > 0 &&
    lines[lines.length - 1].trim() === ""
  ) {
    lines.pop();
  }

  return lines.map(line => line.trim()).join("\n");
}

// ==============================================================================
// BÀI 3: BỘ MÔ PHỎNG SCOPE CHAIN, HOISTING, TDZ & CONST IMMUTABILITY
// ==============================================================================

/**
 * Khởi tạo một Scope Registry mô phỏng chính xác cơ chế Scope Chain, Hoisting,
 * Temporal Dead Zone (TDZ) và quy tắc khai báo biến let/const/var trong JavaScript ES6+.
 * 
 * @param {object|null} [parentScope=null] - Scope cha (nếu có) để tạo Scope Chain
 * @returns {object} Đối tượng scope chứa các phương thức:
 *   - declare(name, kind): Khai báo tên biến với từ khóa 'var', 'let' hoặc 'const'.
 *       + Nếu kind không hợp lệ -> ném TypeError("Invalid declaration kind").
 *       + Nếu biến đã tồn tại trong scope hiện tại và khai báo lại bằng 'let' hoặc 'const'
 *         (hoặc biến cũ là 'let'/'const') -> ném TypeError("Identifier '<name>' has already been declared").
 *       + Nếu kind là 'var': biến được hoisted với giá trị ban đầu là `undefined`.
 *       + Nếu kind là 'let' hoặc 'const': biến nằm trong vùng TDZ (UNINITIALIZED).
 * 
 *   - initialize(name, value): Khởi tạo giá trị đầu tiên cho biến (đưa biến ra khỏi TDZ).
 *       + Nếu biến chưa từng declare trong scope hiện tại -> ném ReferenceError("'<name>' is not declared").
 *       + Nếu biến đã qua bước initialize rồi mà gọi lại -> ném Error("Variable already initialized").
 *       + Nếu biến là 'const': gán giá trị, và nếu value là object/array thì áp dụng `Object.freeze(value)`.
 * 
 *   - assign(name, value): Gán lại giá trị cho biến đã khởi tạo theo Scope Chain.
 *       + Tìm kiếm biến từ scope hiện tại lên parentScope.
 *       + Nếu không tìm thấy ở bất kỳ scope nào -> ném ReferenceError("'<name>' is not defined").
 *       + Nếu tìm thấy nhưng biến đang trong TDZ -> ném ReferenceError("Cannot access '<name>' before initialization").
 *       + Nếu biến có kind là 'const' -> ném TypeError("Assignment to constant variable").
 *       + Cập nhật giá trị mới cho biến (trên đúng scope mà biến được tìm thấy).
 * 
 *   - get(name): Đọc giá trị biến theo Scope Chain.
 *       + Tìm kiếm biến từ scope hiện tại lên parentScope.
 *       + Nếu không tìm thấy -> ném ReferenceError("'<name>' is not defined").
 *       + Nếu tìm thấy nhưng biến đang trong TDZ -> ném ReferenceError("Cannot access '<name>' before initialization").
 *       + Trả về giá trị của biến.
 * 
 *   - createChildScope(): Tạo một scope con mới có parentScope chính là scope hiện tại,
 *       cho phép Variable Shadowing (khai báo biến trùng tên mà không đụng chạm đến scope cha).
 */
const UNINITIALIZED = Symbol("UNINITIALIZED");
function createScopeRegistry(parentScope = null) {
  const variables = new Map();
  function findBinding(name) {
    if (variables.has(name)) {
      return variables.get(name);
    }

    if (parentScope !== null) {
      return parentScope._findBinding(name);
    }

    return null;
  }

  function declare(name, kind) {
    if (!["var", "let", "const"].includes(kind)) {
      throw new TypeError("Invalid declaration kind");
    }

    if (variables.has(name)) {
      const existing = variables.get(name);
      if (existing.kind !== "var" || kind !== "var") {
        throw new TypeError(
          `Identifier '${name}' has already been declared`
        );
      }

      return;
    }

    // Hoisting
    variables.set(name, {
      kind,
      value: kind === "var" ? undefined : UNINITIALIZED,
      initialized: kind === "var"
    });
  }

  function initialize(name, value) {
    if (!variables.has(name)) {
      throw new ReferenceError(`'${name}' is not declared`);
    }

    const binding = variables.get(name);
    if (binding.initialized) {
      throw new Error("Variable already initialized");
    }

    if ( binding.kind === "const" && value !== null && typeof value === "object" ) {
      value = Object.freeze(value);
    }

    binding.value = value;
    binding.initialized = true;
  }

  function assign(name, value) {
    const binding = findBinding(name);
    if (binding === null) {
      throw new ReferenceError(`'${name}' is not defined`);
    }

    if (!binding.initialized) {
      throw new ReferenceError(
        `Cannot access '${name}' before initialization`
      );
    }

    if (binding.kind === "const") {
      throw new TypeError("Assignment to constant variable");
    }

    binding.value = value;
  }

  function get(name) {
    const binding = findBinding(name);
    if (binding === null) {
      throw new ReferenceError(`'${name}' is not defined`);
    }

    if (!binding.initialized) {
      throw new ReferenceError(
        `Cannot access '${name}' before initialization`
      );
    }

    return binding.value;
  }

  function createChildScope() {
    return createScopeRegistry(api);
  }

  const api = {
    declare,
    initialize,
    assign,
    get,
    createChildScope,

    _findBinding: findBinding
  };

  return api;
}

module.exports = {
  createExecutionContext,
  createBatchHandlers,
  highlight,
  multilineFormat,
  createScopeRegistry,
};