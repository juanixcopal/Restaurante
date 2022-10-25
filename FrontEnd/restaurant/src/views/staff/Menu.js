import React from "react";
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap"

import { GiHamburger, GiWaterBottle, GiWok, GiNoodles } from "react-icons/gi";
import { RiRestaurant2Fill } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";


import { useFetchInitMenu } from "../../hooks/menu/index"



const Menu = () => {
    const { FetchGrupoMenu } = useFetchInitMenu();
    const { grupoMenu, loadingGrupoMenu } = FetchGrupoMenu;

    return (
        <>
            <div className="content" >
                <Row>
                    {
                        grupoMenu.map((item, index) => {
                            const { id_grupo_comida, tipo_comida } = item
                            return (
                                <Col key={index} lg="5" md="6" sm="6">
                                    <Card className="card-stats">
                                        <CardBody>
                                            <Row>
                                                <Col md="4" xs="5">
                                                    <div className="icon-big text-center" >
                                                        <i className="text-primary"><MdOutlineFastfood /></i>
                                                    </div>
                                                </Col>
                                                <Col md="8" xs="7">
                                                    <div className="numbers">
                                                        <p className="card-category">Category</p>
                                                        <CardTitle tag="p" key={id_grupo_comida}>{tipo_comida}</CardTitle>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                        <CardFooter>
                                            <hr />
                                            <Col xs="5" >
                                                <div className="stats">
                                                    <i className="far fa-clock" /> Name
                                                </div>
                                            </Col>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}

export default Menu;