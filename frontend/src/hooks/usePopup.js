import {useCallback, useContext} from "react";
import {ConfigContext} from "../components/ConfigProvider/ConfigProvider";

/**
 * Example
 *
 * const popup = usePopup();
 * const showPopup = () => {
 *         popup({
 *             title: "title",
 *             message: "message",
 *             buttons: [
 *                 {
 *                     id: "foo",
 *                     type: "default",
 *                     text: "foo"
 *                 },
 *                 {
 *                     id: "bar",
 *                     type: "destructive",
 *                     text: "bar"
 *                 }
 *             ]
 *         }).then((buttonId) => {
 *             console.log(buttonId);
 *         }).catch(() => {
 *             alert("no")
 *         });
 *     }
 *
 */

const usePopup = () => {

    const { webAppInstance } = useContext(ConfigContext);

    return useCallback(
        params =>
            new Promise((resolve, reject) => {
                try {
                    webAppInstance?.showPopup?.(params, (buttonId) => {
                        resolve(buttonId);
                    });
                } catch (e) {
                    reject(e);
                }
            }),
        [webAppInstance],
    );
}

export default usePopup;