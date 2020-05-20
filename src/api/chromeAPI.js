const { tabs, storage } = chrome;

export default {
  storage: {
    /**
     * getAllItems
     * @param {callback} cb - The callback that handles the response.
     *
     * @callback cb - Callback with storage items
     * @param {object,} items
     */
    getAllTasks: (cb) => chrome.storage.sync.get(['tasks'], cb),
    /**
     * @param  {Array<{searchQuery: string, url: string, didClicked: boolean}>} items - Array with tasks in format 
     * @param  {callback} cb - Callback on success, or on failure
     *
     * @callback cb - Callback on success, or on failure
     */
    setTasks: (items, cb) => chrome.storage.sync.set({tasks: items}, cb),
  },
};
