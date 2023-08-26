const ProductDescription = () => {
  const description = `<ul class="a-unordered-list a-vertical a-spacing-mini" style=" margin: 0px 0px 0px 18px; color: rgb(15, 17, 17); font-family: &quot;Amazon Ember&quot;, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255)"><li class="a-spacing-mini" style=" list-style: disc; overflow-wrap: break-word"><span class="a-list-item" style=" color: rgb(15, 17, 17)">Brand Name : Soundcore</span></li><li class="a-spacing-mini" style=" list-style: disc; overflow-wrap: break-word"><span class="a-list-item" style=" color: rgb(15, 17, 17)">Incredible Sound Loved by 20 Million+ People</span></li><li class="a-spacing-mini" style=" list-style: disc; overflow-wrap: break-word"><span class="a-list-item" style=" color: rgb(15, 17, 17)">Impressive Sound: Life P2i true wireless earbuds feature 10mm drivers that boost quality sound with deep bass and mids at optimal levels that are pleasing to the ears.</span></li><li class="a-spacing-mini" style=" list-style: disc; overflow-wrap: break-word"><span class="a-list-item" style=" color: rgb(15, 17, 17)">Speak and Be Heard: Life P2i true wireless earbuds reduces noise via a custom AI algorithm, while two microphones pick up your voice clearly. Long Life Buds: Battery life lasts 8 hours per charge and extends to 28 hours with the compact case. For a quick boost of power, charge for 10 minutes and get a full hour of use.</span></li><li class="a-spacing-mini" style=" list-style: disc; overflow-wrap: break-word"><span class="a-list-item" style=" color: rgb(15, 17, 17)">Effortless Connectivity: After connecting for the first time, Life P2i true wireless earbuds will detect and pair with your device when you open the charging case.</span></li></ul>`;
  return (
    <div
      className="article_body"
      id={"artContent"}
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></div>
  );
};

export default ProductDescription;
