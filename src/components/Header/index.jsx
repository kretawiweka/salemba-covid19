import React from "react";
import { PageHeader, Button, Input, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;

const Header = () => {
  const onSearch = () => {};

  const CovidMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/tentang-covid-19">Tentang Covid-19</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/vaksin">Vaksin</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/tempat-rujukan">Tempat Rujukan</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <PageHeader
      ghost={false}
      title="Kota Salemba"
      extra={[
        <Link key="1" to="/">
          <Button>Home</Button>
        </Link>,
        <Link key="2" to="/berita">
          <Button>Berita</Button>
        </Link>,
        <Dropdown key="3" overlay={CovidMenu} placement="bottomCenter">
          <Button>Covid-19 / Vaksin</Button>
        </Dropdown>,
        <Link key="4" to="/bansos">
          <Button>Bansos</Button>
        </Link>,
        <Search
          key="5"
          placeholder="Search"
          onSearch={onSearch}
          style={{ width: 200 }}
        />,
      ]}
    />
  );
};

export default Header;
