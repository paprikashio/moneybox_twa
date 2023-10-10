import {createBrowserRouter} from "react-router-dom";
import Wallet from "../views/wallet/Wallet";
import Listing from "../views/list/Listing";
import TargetStep from "../views/create/TargetStep";
import AmountStep from "../views/create/AmountStep";
import DateStep from "../views/create/DateStep";
import Mint from "../views/create/Mint";
import Confirm from "../views/create/Confirm";
import Detail from "../views/list/detail/Detail";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Listing />,
    },
    {
        path: "/detail/:address",
        element: <Detail />,
    },
    {
        path: "/create_1",
        element: <TargetStep />,
    },
    {
        path: "/create_2",
        element: <AmountStep />,
    },
    {
        path: "/create_3",
        element: <DateStep />,
    },
    {
        path: "/mint",
        element: <Mint />,
    },
    {
        path: "/confirm/:seqno",
        element: <Confirm />,
    },
    {
        path: "/wallet",
        element: <Wallet />,
    },
]);