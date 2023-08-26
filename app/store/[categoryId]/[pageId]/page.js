"use client";
import ProdcutCard from "@/components/layout/ProductCard";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Slider } from "primereact/slider";
import { useState } from "react";
import styles from "@/app/store/page.module.css";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { Sidebar } from "primereact/sidebar";
const CategoryPage = ({ params, searchParams }) => {
  const [visibleBottom, setVisibleBottom] = useState(false);
  const [price, setPrice] = useState([0, 1000]);
  const categories = [
    { name: "Tops(55)", key: "Ag" },
    { name: "Dressess(33)", key: "Ms" },
    { name: "T-shirt(23)", key: "Pf" },
    { name: "Trousers(23)", key: "Kb" },
    { name: "Jeans(14)", key: "R5" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );
    setSelectedCategories(_selectedCategories);
  };
  const [selectedBrands, setSelectedBrands] = useState([]);

  const brands = [
    { name: "URBANIC", key: "A1" },
    { name: "BoStreet", key: "M3" },
    { name: "Tokyo", key: "P4" },
    { name: "Vero", key: "K6" },
    { name: "H&M", key: "R7" },
  ];
  const onBarndChange = (e) => {
    let _selectedCategories = [...selectedBrands];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (brand) => brand.key !== e.value.key
      );
    setSelectedBrands(_selectedCategories);
  };

  const colors = [
    { name: "Black", key: "Ann" },
    { name: "Blue", key: "Mgg" },
    { name: "White", key: "Pff" },
    { name: "Pink", key: "Rdd" },
    { name: "Green", key: "gff" },
    { name: "Red", key: "hgg" },
  ];
  const [selectedColors, setSelectedColors] = useState(colors);
  return (
    <div>
      <div className={"cramp"}>
        <Link href={"/"}>Home</Link>
        <span>
          {" "}
          <MdArrowForwardIos />
        </span>
        <Link href={`/store/men`} className={"cramp_active"}>
          Men
        </Link>
      </div>
      <div className="grid justify-content-between ">
        <div className="col-12 md:col-2">
          <Accordion multiple activeIndex={[0, 1, 2, 3, 4]}>
            <AccordionTab header="Categories" className="accContainer">
              <div className="flex flex-column gap-3 m-0">
                {categories.map((category) => {
                  return (
                    <div key={category.key} className="flex align-items-center">
                      <Checkbox
                        inputId={category.key}
                        name="category"
                        value={category}
                        onChange={onCategoryChange}
                        checked={selectedCategories.some(
                          (item) => item.key === category.key
                        )}
                      />
                      <label htmlFor={category.key} className="ml-2">
                        {category.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </AccordionTab>

            <AccordionTab header="Brand" className="accContainer">
              <div className="flex flex-column gap-3 m-0">
                {brands.map((brand) => {
                  return (
                    <div key={brand.key} className="flex align-items-center">
                      <Checkbox
                        inputId={brand.key}
                        name="brand"
                        value={brand}
                        onChange={onBarndChange}
                        checked={selectedBrands.some(
                          (item) => item.key === brand.key
                        )}
                      />
                      <label htmlFor={brand.key} className="ml-2">
                        {brand.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </AccordionTab>
            <AccordionTab header="Size" className="accContainer">
              <div className={`m-0 size`}>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
              </div>
            </AccordionTab>
            <AccordionTab header="Color" className="accContainer">
              <div className="flex flex-column gap-3 ml-1">
                {colors.map((ele) => {
                  return (
                    <div key={ele.key} className="flex align-items-center">
                      <RadioButton
                        className={`Radio`}
                        style={{ "--mainRadio": ele.name }}
                        inputId={ele.key}
                        name="category"
                        value={ele}
                        onChange={(e) => setSelectedColors(e.value)}
                        checked={selectedColors.key === ele.key}
                      />
                      <label htmlFor={ele.key} className="ml-2">
                        {ele.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </AccordionTab>
            <AccordionTab header="Price">
              <div className="">
                <div className="slider-demo">
                  <div className="slider-header-container">
                    <span>{price[0]} $</span>
                    <span>{price[1]} $</span>
                  </div>
                  <Slider
                    max={1000}
                    min={0}
                    value={price}
                    onChange={(e) => setPrice(e.value)}
                    range
                  />
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
        <div className="col-12 md:col-10">
          <div className="grid">
            <div className="col-6 md:col-3">
              <ProdcutCard count={5} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={4} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={3} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={2} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={5} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={5} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={1} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={5} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={4} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={5} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={3} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={5} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={5} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={2} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={4} />
            </div>
            <div className="col-6 md:col-3">
              <ProdcutCard count={1} />
            </div>
          </div>
          <div className={`${styles.pagenation} text-center margin_top`}>
            <Link href={"/store/men/1"} className={styles.active}>
              1
            </Link>
            <Link href={"/store/men/2"}>2</Link>
            <Link href={"/store/men/3"}>3</Link>
            <Link href={"/store/men/4"}>4</Link>
            <Link href={"/store/men/5"} className={styles.active}>
              <MdArrowForwardIos />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
