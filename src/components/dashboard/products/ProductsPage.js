import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import ProductsList from "./ProductsList";

export default function ProductsPage() {
    return (
        <DashboardPage>
            <Heading size="3" content="Products" />
            <ProductsList />
        </DashboardPage>
    );
}