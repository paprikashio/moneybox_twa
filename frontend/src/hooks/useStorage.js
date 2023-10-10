import {useCallback, useContext} from "react";
import {ConfigContext} from "../components/ConfigProvider/ConfigProvider";
import {objectToArray} from "../helpers/common";

const useStorage = () => {

    const { webAppInstance } = useContext(ConfigContext);

    return {
        getKeyIndex: useCallback(
            () =>
                new Promise((resolve, reject) => {
                    try {
                        webAppInstance?.CloudStorage?.getKeys?.((e, result) => {
                            if (e) {
                                reject(e);
                            }
                            resolve(result.length);
                        })
                    } catch (e) {
                        reject(e);
                    }
                }),
            [webAppInstance],
        ),
        getKeys: useCallback(
            () =>
                new Promise((resolve, reject) => {
                    try {
                        webAppInstance?.CloudStorage?.getKeys?.((e, result) => {
                            if (e) {
                                reject(e);
                            }
                            resolve(result);
                        })
                    } catch (e) {
                        reject(e);
                    }
                }),
            [webAppInstance],
        ),
        getItem: useCallback(
            key =>
                new Promise((resolve, reject) => {
                    try {
                        webAppInstance?.CloudStorage?.getItem?.(key, (e, result) => {
                            if (e) {
                                reject(e);
                            }
                            resolve(result);
                        })
                    } catch (e) {
                        reject(e);
                    }
                }),
            [webAppInstance],
        ),
        getItems: useCallback(
            keys =>
                new Promise((resolve, reject) => {
                    try {
                        webAppInstance?.CloudStorage?.getItems?.(keys, (e, result) => {
                            if (e) {
                                reject(e);
                            }
                            let array = result;
                            if (!Array.isArray(result)) {
                                array = objectToArray(result);
                            }
                            resolve(array);
                        })
                    } catch (e) {
                        reject(e);
                    }
                }),
            [webAppInstance],
        ),
        setItem: useCallback(
            (key, value) =>
                new Promise((resolve, reject) => {
                    try {
                        webAppInstance?.CloudStorage?.setItem?.(key, value, (e, result) => {
                            if (e) {
                                reject(e);
                            }
                            if (result !== true) {
                                reject("variable not save");
                            }
                            resolve(result);
                        })
                    } catch (e) {
                        reject(e);
                    }
                }),
            [webAppInstance],
        ),
        removeItem: useCallback(
            key =>
                new Promise((resolve, reject) => {
                    try {
                        webAppInstance?.CloudStorage?.removeItem?.(key, (e, result) => {
                            if (e) {
                                reject(e);
                            }
                            if (result !== true) {
                                reject("variable not remove");
                            }
                            resolve(result);
                        })
                    } catch (e) {
                        reject(e);
                    }
                }),
            [webAppInstance],
        ),
        removeItems: useCallback(
            keys =>
                new Promise((resolve, reject) => {
                    try {
                        webAppInstance?.CloudStorage?.removeItems?.(keys, (e, result) => {
                            if (e) {
                                reject(e);
                            }
                            resolve(result);
                        })
                    } catch (e) {
                        reject(e);
                    }
                }),
            [webAppInstance],
        ),
    };

}

export default useStorage;