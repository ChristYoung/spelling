import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/react-indexed-db-hook/lib/main.js
var require_main = __commonJS({
  "node_modules/react-indexed-db-hook/lib/main.js"(exports, module) {
    (() => {
      "use strict";
      var e = { 675: (e2, n2) => {
        function t2(e3, n3) {
          return e3.objectStoreNames.contains(n3);
        }
        Object.defineProperty(n2, "__esModule", { value: true }), n2.optionsGenerator = n2.createTransaction = n2.validateBeforeTransaction = n2.validateStoreName = void 0, n2.validateStoreName = t2, n2.validateBeforeTransaction = function(e3, n3, r) {
          e3 || r("You need to use the openDatabase function to create a database before you query it!"), t2(e3, n3) || r("objectStore does not exists: ".concat(n3));
        }, n2.createTransaction = function(e3, n3) {
          var t3 = e3.transaction(n3.storeName, n3.dbMode);
          return t3.onerror = n3.error, t3.oncomplete = n3.complete, t3.onabort = n3.abort, t3;
        }, n2.optionsGenerator = function(e3, n3, t3, r) {
          return { storeName: n3, dbMode: e3, error: function(e4) {
            t3(e4);
          }, complete: function() {
            r();
          }, abort: function(e4) {
            t3(e4);
          } };
        };
      }, 823: (e2, n2, t2) => {
        Object.defineProperty(n2, "__esModule", { value: true }), n2.createDatabaseTransaction = void 0;
        var r = t2(675);
        n2.createDatabaseTransaction = function(e3, n3, t3, o, a, i, c) {
          void 0 === i && (i = r.createTransaction), void 0 === c && (c = r.optionsGenerator);
          var u = i(e3, c(n3, t3, a, o));
          return { store: u.objectStore(t3), transaction: u };
        };
      }, 401: (e2, n2, t2) => {
        Object.defineProperty(n2, "__esModule", { value: true }), n2.createReadonlyTransaction = void 0;
        var r = t2(84), o = t2(823);
        n2.createReadonlyTransaction = function(e3, n3, t3, a) {
          return (0, o.createDatabaseTransaction)(e3, r.DBMode.readonly, n3, t3, a);
        };
      }, 987: (e2, n2, t2) => {
        Object.defineProperty(n2, "__esModule", { value: true }), n2.createReadwriteTransaction = void 0;
        var r = t2(84), o = t2(823);
        n2.createReadwriteTransaction = function(e3, n3, t3, a) {
          return (0, o.createDatabaseTransaction)(e3, r.DBMode.readwrite, n3, t3, a);
        };
      }, 629: function(e2, n2, t2) {
        var r = this && this.__createBinding || (Object.create ? function(e3, n3, t3, r2) {
          void 0 === r2 && (r2 = t3);
          var o2 = Object.getOwnPropertyDescriptor(n3, t3);
          o2 && !("get" in o2 ? !n3.__esModule : o2.writable || o2.configurable) || (o2 = { enumerable: true, get: function() {
            return n3[t3];
          } }), Object.defineProperty(e3, r2, o2);
        } : function(e3, n3, t3, r2) {
          void 0 === r2 && (r2 = t3), e3[r2] = n3[t3];
        }), o = this && this.__exportStar || function(e3, n3) {
          for (var t3 in e3)
            "default" === t3 || Object.prototype.hasOwnProperty.call(n3, t3) || r(n3, e3, t3);
        };
        Object.defineProperty(n2, "__esModule", { value: true }), n2.IndexedDB = n2.AccessDB = void 0;
        var a = t2(7);
        Object.defineProperty(n2, "AccessDB", { enumerable: true, get: function() {
          return a.AccessDB;
        } }), Object.defineProperty(n2, "IndexedDB", { enumerable: true, get: function() {
          return a.IndexedDB;
        } }), o(t2(157), n2);
      }, 7: function(e2, n2, t2) {
        var r = this && this.__assign || function() {
          return r = Object.assign || function(e3) {
            for (var n3, t3 = 1, r2 = arguments.length; t3 < r2; t3++)
              for (var o2 in n3 = arguments[t3])
                Object.prototype.hasOwnProperty.call(n3, o2) && (e3[o2] = n3[o2]);
            return e3;
          }, r.apply(this, arguments);
        }, o = this && this.__awaiter || function(e3, n3, t3, r2) {
          return new (t3 || (t3 = Promise))(function(o2, a2) {
            function i2(e4) {
              try {
                u2(r2.next(e4));
              } catch (e5) {
                a2(e5);
              }
            }
            function c2(e4) {
              try {
                u2(r2.throw(e4));
              } catch (e5) {
                a2(e5);
              }
            }
            function u2(e4) {
              var n4;
              e4.done ? o2(e4.value) : (n4 = e4.value, n4 instanceof t3 ? n4 : new t3(function(e5) {
                e5(n4);
              })).then(i2, c2);
            }
            u2((r2 = r2.apply(e3, n3 || [])).next());
          });
        }, a = this && this.__generator || function(e3, n3) {
          var t3, r2, o2, a2, i2 = { label: 0, sent: function() {
            if (1 & o2[0])
              throw o2[1];
            return o2[1];
          }, trys: [], ops: [] };
          return a2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
            return this;
          }), a2;
          function c2(a3) {
            return function(c3) {
              return function(a4) {
                if (t3)
                  throw new TypeError("Generator is already executing.");
                for (; i2; )
                  try {
                    if (t3 = 1, r2 && (o2 = 2 & a4[0] ? r2.return : a4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, a4[1])).done)
                      return o2;
                    switch (r2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
                      case 0:
                      case 1:
                        o2 = a4;
                        break;
                      case 4:
                        return i2.label++, { value: a4[1], done: false };
                      case 5:
                        i2.label++, r2 = a4[1], a4 = [0];
                        continue;
                      case 7:
                        a4 = i2.ops.pop(), i2.trys.pop();
                        continue;
                      default:
                        if (!((o2 = (o2 = i2.trys).length > 0 && o2[o2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                          i2 = 0;
                          continue;
                        }
                        if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                          i2.label = a4[1];
                          break;
                        }
                        if (6 === a4[0] && i2.label < o2[1]) {
                          i2.label = o2[1], o2 = a4;
                          break;
                        }
                        if (o2 && i2.label < o2[2]) {
                          i2.label = o2[2], i2.ops.push(a4);
                          break;
                        }
                        o2[2] && i2.ops.pop(), i2.trys.pop();
                        continue;
                    }
                    a4 = n3.call(e3, i2);
                  } catch (e4) {
                    a4 = [6, e4], r2 = 0;
                  } finally {
                    t3 = o2 = 0;
                  }
                if (5 & a4[0])
                  throw a4[1];
                return { value: a4[0] ? a4[1] : void 0, done: true };
              }([a3, c3]);
            };
          }
        }, i = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(n2, "__esModule", { value: true }), n2.AccessDB = n2.IndexedDB = void 0;
        var c = i(t2(689)), u = t2(84), s = c.default.createContext({ db: null, name: null, version: null }), f = s.Provider, d = s.Consumer;
        n2.IndexedDB = function(e3) {
          var n3 = this, t3 = e3.name, r2 = e3.version, i2 = e3.children;
          return e3.objectStoresMeta.forEach(function(e4) {
            return o(n3, void 0, void 0, function() {
              return a(this, function(n4) {
                switch (n4.label) {
                  case 0:
                    return [4, (0, u.openDatabase)(t3, r2, function(n5) {
                      var t4 = n5.currentTarget.result.createObjectStore(e4.store, e4.storeConfig);
                      e4.storeSchema.forEach(function(e5) {
                        t4.createIndex(e5.name, e5.keypath, e5.options);
                      });
                    })];
                  case 1:
                    return n4.sent(), [2];
                }
              });
            });
          }), c.default.createElement(f, { value: { db: null, name: t3, version: r2 } }, i2);
        }, n2.AccessDB = function(e3) {
          var n3 = e3.children, t3 = e3.objectStore;
          return c.default.createElement(d, null, function(e4) {
            var o2 = e4.db, a2 = e4.name, i2 = e4.version;
            return n3(r({ db: o2 }, (0, u.DBOperations)(a2, i2, t3)));
          });
        };
      }, 84: (e2, n2, t2) => {
        Object.defineProperty(n2, "__esModule", { value: true }), n2.DBMode = n2.DBOperations = n2.CreateObjectStore = n2.openDatabase = void 0;
        var r, o = t2(675), a = t2(987), i = t2(401), c = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        function u(e3, n3, t3) {
          return new Promise(function(r2, o2) {
            var a2, i2 = c.open(e3, n3);
            i2.onsuccess = function() {
              a2 = i2.result, r2(a2);
            }, i2.onerror = function() {
              o2("IndexedDB error: ".concat(i2.error));
            }, "function" == typeof t3 && (i2.onupgradeneeded = function(e4) {
              t3(e4, a2);
            });
          });
        }
        n2.openDatabase = u, n2.CreateObjectStore = function(e3, n3, t3) {
          var r2 = c.open(e3, n3);
          r2.onupgradeneeded = function(e4) {
            var n4 = e4.target.result;
            t3.forEach(function(e5) {
              if (!n4.objectStoreNames.contains(e5.store)) {
                var t4 = n4.createObjectStore(e5.store, e5.storeConfig);
                e5.storeSchema.forEach(function(e6) {
                  t4.createIndex(e6.name, e6.keypath, e6.options);
                });
              }
            }), n4.close();
          }, r2.onsuccess = function(e4) {
            e4.target.result.close();
          };
        }, n2.DBOperations = function(e3, n3, t3) {
          return { add: function(r2, o2) {
            return new Promise(function(i2, c2) {
              u(e3, n3).then(function(e4) {
                var n4 = (0, a.createReadwriteTransaction)(e4, t3, i2, c2).store.add(r2, o2);
                n4.onsuccess = function(e5) {
                  o2 = e5.target.result, i2(o2);
                }, n4.onerror = function(e5) {
                  return c2(e5);
                };
              });
            });
          }, getByID: function(r2) {
            return new Promise(function(a2, c2) {
              u(e3, n3).then(function(e4) {
                (0, o.validateBeforeTransaction)(e4, t3, c2), (0, i.createReadonlyTransaction)(e4, t3, a2, c2).store.get(r2).onsuccess = function(e5) {
                  a2(e5.target.result);
                };
              });
            });
          }, getAll: function() {
            return new Promise(function(r2, a2) {
              u(e3, n3).then(function(e4) {
                (0, o.validateBeforeTransaction)(e4, t3, a2);
                var n4 = (0, i.createReadonlyTransaction)(e4, t3, r2, a2).store.getAll();
                n4.onerror = function(e5) {
                  return a2(e5);
                }, n4.onsuccess = function(e5) {
                  var n5 = e5.target.result;
                  r2(n5);
                };
              });
            });
          }, update: function(r2, i2) {
            return new Promise(function(c2, s) {
              u(e3, n3).then(function(e4) {
                (0, o.validateBeforeTransaction)(e4, t3, s);
                var n4 = (0, a.createReadwriteTransaction)(e4, t3, c2, s), u2 = n4.transaction, f = n4.store;
                u2.oncomplete = function(e5) {
                  return c2(e5);
                }, f.put(r2, i2);
              });
            });
          }, deleteRecord: function(r2) {
            return new Promise(function(i2, c2) {
              u(e3, n3).then(function(e4) {
                (0, o.validateBeforeTransaction)(e4, t3, c2), (0, a.createReadwriteTransaction)(e4, t3, i2, c2).store.delete(r2).onsuccess = function(e5) {
                  return i2(e5);
                };
              });
            });
          }, clear: function() {
            return new Promise(function(r2, i2) {
              u(e3, n3).then(function(e4) {
                (0, o.validateBeforeTransaction)(e4, t3, i2);
                var n4 = (0, a.createReadwriteTransaction)(e4, t3, r2, i2), c2 = n4.store;
                n4.transaction.oncomplete = function() {
                  return r2();
                }, c2.clear();
              });
            });
          }, openCursor: function(r2, a2) {
            return new Promise(function(c2, s) {
              u(e3, n3).then(function(e4) {
                (0, o.validateBeforeTransaction)(e4, t3, s), (0, i.createReadonlyTransaction)(e4, t3, c2, s).store.openCursor(a2).onsuccess = function(e5) {
                  r2(e5), c2();
                };
              });
            });
          }, getByIndex: function(r2, a2) {
            return new Promise(function(c2, s) {
              u(e3, n3).then(function(e4) {
                (0, o.validateBeforeTransaction)(e4, t3, s), (0, i.createReadonlyTransaction)(e4, t3, c2, s).store.index(r2).get(a2).onsuccess = function(e5) {
                  c2(e5.target.result);
                };
              });
            });
          } };
        }, (r = n2.DBMode || (n2.DBMode = {})).readonly = "readonly", r.readwrite = "readwrite";
      }, 157: (e2, n2, t2) => {
        Object.defineProperty(n2, "__esModule", { value: true }), n2.useIndexedDB = n2.initDB = void 0;
        var r = t2(689), o = t2(84), a = { version: null, name: null };
        n2.initDB = function(e3) {
          var n3 = e3.name, t3 = e3.version, r2 = e3.objectStoresMeta;
          a.name = n3, a.version = t3, Object.freeze(a), (0, o.CreateObjectStore)(n3, t3, r2);
        }, n2.useIndexedDB = function(e3) {
          if (!a.name || !a.version)
            throw new Error("Please, initialize the DB before the use.");
          return (0, r.useMemo)(function() {
            return (0, o.DBOperations)(a.name, a.version, e3);
          }, [a, e3]);
        };
      }, 689: (e2) => {
        e2.exports = require_react();
      } }, n = {}, t = function t2(r) {
        var o = n[r];
        if (void 0 !== o)
          return o.exports;
        var a = n[r] = { exports: {} };
        return e[r].call(a.exports, a, a.exports, t2), a.exports;
      }(629);
      module.exports = t;
    })();
  }
});
export default require_main();
//# sourceMappingURL=react-indexed-db-hook.js.map
