/**
 * Category
 */
export interface ICreateUpdateCategoryDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;
}
export class CreateUpdateCategoryDto implements ICreateUpdateCategoryDto {
  name: string;
  description: string;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;

  constructor(data?: ICreateUpdateCategoryDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {

      this.name = _data["name"];
      this.description = _data["description"];
      this.point = _data["point"];
      this.image = _data["image"];

    }
  }

  static fromJS(data: any): CreateUpdateCategoryDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdateCategoryDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["description"] = this.description;
    data["point"] = this.point;
    data["image"] = this.image;

    return data;
  }

  clone(): CreateUpdateCategoryDto {
    const json = this.toJSON();
    let result = new CreateUpdateCategoryDto();
    result.init(json);
    return result;
  }
}
export interface IReadCategoryDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  imagePath: any;
}

export class ReadCategoryDto implements IReadCategoryDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  imagePath: any;


  constructor(data?: ReadBrandDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.description = _data["description"];
      this.point = _data["point"];
      this.imagePath = _data["imagePath"];
    }
  }

  static fromJS(data: any): ReadBrandDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadBrandDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["description"] = this.description;
    data["point"] = this.point;
    data["imagePath"] = this.imagePath;

    return data;
  }

  clone(): ReadBrandDto {
    const json = this.toJSON();
    let result = new ReadBrandDto();
    result.init(json);
    return result;
  }
}


/**
 * skin type
 */

export interface ICreateUpdateSkinTypeDto {
  name: string | undefined;
}

export class CreateUpdateSkinTypeDto implements ICreateUpdateSkinTypeDto {
  name: string | undefined;




  constructor(data?: ICreateUpdateSkinTypeDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }




  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
    }
  }


  static fromJS(data: any): CreateUpdateSkinTypeDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdateSkinTypeDto();
    result.init(data);
    return result;
  }


  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    return data;
  }


  clone(): CreateUpdateSkinTypeDto {
    const json = this.toJSON();
    let result = new CreateUpdateSkinTypeDto();
    result.init(json);
    return result;
  }
}



export interface IReadSkinTypeDto {
  id: number;
  name: string | undefined;
}


export class ReadSkinTypeDto implements IReadSkinTypeDto {
  id: number;
  name: string | undefined;




  constructor(data?: IReadSkinTypeDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }




  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.id = _data["id"];
      this.name = _data["name"];
    }
  }


  static fromJS(data: any): ReadSkinTypeDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadSkinTypeDto();
    result.init(data);
    return result;
  }


  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    return data;
  }


  clone(): ReadSkinTypeDto {
    const json = this.toJSON();
    let result = new ReadSkinTypeDto();
    result.init(json);
    return result;
  }
}

/**
*
SkinType For Dropdown
*/


export class SkinTypeForDropdownDto implements ISkinTypeForDropdownDto {
  id: number;
  name: string | undefined;
  // parentCategory: CategoryForDropdownDto;
  readonly fullName: string | undefined;

  constructor(data?: ISkinTypeForDropdownDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      // this.parentCategory = _data["parentCategory"] ? CategoryForDropdownDto.fromJS(_data["parentCategory"]) : <any>undefined;
      (<any>this).fullName = _data["fullName"];
    }
  }

  static fromJS(data: any): SkinTypeForDropdownDto {
    data = typeof data === 'object' ? data : {};
    let result = new SkinTypeForDropdownDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    // data["parentCategory"] = this.parentCategory ? this.parentCategory.toJSON() : <any>undefined;
    data["fullName"] = this.fullName;
    return data;
  }

  clone(): SkinTypeForDropdownDto {
    const json = this.toJSON();
    let result = new SkinTypeForDropdownDto();
    result.init(json);
    return result;
  }
}

export interface ISkinTypeForDropdownDto {
  id: number;
  name: string | undefined;
  // parentCategory: CategoryForDropdownDto;
  fullName: string | undefined;
}

/**
* Brands
*/

export interface ICreateUpdateBrandDto {
  name: string | undefined;

}
export class CreateUpdateBrandDto implements ICreateUpdateBrandDto {
  name: string | undefined;




  constructor(data?: ICreateUpdateBrandDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }




  init(_data?: any) {
    if (_data) {


      this.name = _data["name"];

    }
  }


  static fromJS(data: any): CreateUpdateBrandDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdateBrandDto();
    result.init(data);
    return result;
  }


  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;


    return data;
  }


  clone(): CreateUpdateBrandDto {
    const json = this.toJSON();
    let result = new CreateUpdateBrandDto();
    result.init(json);
    return result;
  }
}


export interface IReadBrandDto {
  id: number;
  name: string | undefined;
}


export class ReadBrandDto implements IReadBrandDto {
  id: number;
  name: string | undefined;




  constructor(data?: ReadBrandDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }




  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.id = _data["id"];
      this.name = _data["name"];
    }
  }


  static fromJS(data: any): ReadBrandDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadBrandDto();
    result.init(data);
    return result;
  }


  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    return data;
  }


  clone(): ReadBrandDto {
    const json = this.toJSON();
    let result = new ReadBrandDto();
    result.init(json);
    return result;
  }
}

/**
*
Brand For Dropdown
*/


export class BrandForDropdownDto implements IBrandForDropdownDto {
  id: number;
  name: string | undefined;
  // parentCategory: CategoryForDropdownDto;
  readonly fullName: string | undefined;

  constructor(data?: IBrandForDropdownDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      // this.parentCategory = _data["parentCategory"] ? CategoryForDropdownDto.fromJS(_data["parentCategory"]) : <any>undefined;
      (<any>this).fullName = _data["fullName"];
    }
  }

  static fromJS(data: any): BrandForDropdownDto {
    data = typeof data === 'object' ? data : {};
    let result = new BrandForDropdownDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    // data["parentCategory"] = this.parentCategory ? this.parentCategory.toJSON() : <any>undefined;
    data["fullName"] = this.fullName;
    return data;
  }

  clone(): BrandForDropdownDto {
    const json = this.toJSON();
    let result = new BrandForDropdownDto();
    result.init(json);
    return result;
  }
}

export interface IBrandForDropdownDto {
  id: number;
  name: string | undefined;
  // parentCategory: CategoryForDropdownDto;
  fullName: string | undefined;
}


/**
* Products
*/

export interface ICreateUpdateProductDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  categoryId: number | undefined;
  brandId: number | undefined;
  skinTypeId: number | undefined;
  images: any[];
  sizes: any[];
}
export class CreateUpdateProductDto implements ICreateUpdateProductDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  categoryId: number | undefined;
  brandId: number | undefined;
  skinTypeId: number | undefined;
  images: any[];
  sizes: any[];
  // images: CreateProductImageDto[] | undefined;
  // sizes: CreateProductSizeDto[] | undefined;

  constructor(data?: ICreateUpdateCategoryDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {

      this.name = _data["name"];
      this.description = _data["description"];
      this.point = _data["point"];
      this.categoryId = _data["categoryId"];
      this.brandId = _data["brandId"];
      this.skinTypeId = _data["skinTypeId"];
      if (Array.isArray(_data["images"])) {
        this.images = [] as any;
        for (let item of _data["images"])
          this.images.push(item);
      }
      if (Array.isArray(_data["sizes"])) {
        this.sizes = [] as any;
        for (let item of _data["sizes"])
          this.sizes.push(item);
      }
    }
  }

  static fromJS(data: any): CreateUpdateCategoryDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdateCategoryDto();
    result.init(data);
    return result;
  }

  // toJSON(data?: any) {
  //   data = typeof data === 'object' ? data : {};
  //   data["name"] = this.name;
  //   data["description"] = this.description;
  //   data["point"] = this.point;
  //   data["categoryId"] = this.categoryId;
  //   data["brandId"] = this.brandId;
  //   data["skinTypeId"] = this.skinTypeId;
  //   if (Array.isArray(this.images)) {
  //     data["images"] = [];
  //     for (let item of this.images)
  //       data["images"].push(item.toJSON());
  //   }
  //   if (Array.isArray(this.sizes)) {
  //     data["sizes"] = [];
  //     for (let item of this.sizes)
  //       data["sizes"].push(item.toJSON());
  //   }
  //   return data;
  // }

  clone(): CreateUpdateCategoryDto {
    // const json = this.toJSON();
    let result = new CreateUpdateCategoryDto();
    // result.init(json);
    return result;
  }
}
export interface IReadProductDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  skin_type:{id:number ,name:string};
  brand:{id:number ,name:string};
  category:{id:number ,name:string};
  product_images: any[];
}

export class ReadProductDto implements IReadProductDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  category:{id:number ,name:string};
  // parentCategoryId: number | undefined;
  product_images: any[];
  skin_type:{id:number ,name:string};
  brand:{id:number ,name:string}


  constructor(data?: ReadProductDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.description = _data["description"];
      this.point = _data["point"];
      this.category = _data["category"];
      this.skin_type = _data["skin_type"];
      this.brand = _data["brand"];
   
      // this.image = _data["image"];
    }
  }

  static fromJS(data: any): ReadProductDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadProductDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["description"] = this.description;
    data["point"] = this.point;
    data["category"] = this.category;
    data["brand"] = this.brand;
    data["skin_type"] = this.skin_type;
    // data["image"] = this.image;

    return data;
  }

  clone(): ReadProductDto {
    const json = this.toJSON();
    let result = new ReadProductDto();
    result.init(json);
    return result;
  }
}
/**
* Category For Dropdown
*/


export class CategoryForDropdownDto implements ICategoryForDropdownDto {
  id: number;
  name: string | undefined;
  // parentCategory: CategoryForDropdownDto;
  readonly fullName: string | undefined;

  constructor(data?: ICategoryForDropdownDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      // this.parentCategory = _data["parentCategory"] ? CategoryForDropdownDto.fromJS(_data["parentCategory"]) : <any>undefined;
      (<any>this).fullName = _data["fullName"];
    }
  }

  static fromJS(data: any): CategoryForDropdownDto {
    data = typeof data === 'object' ? data : {};
    let result = new CategoryForDropdownDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    // data["parentCategory"] = this.parentCategory ? this.parentCategory.toJSON() : <any>undefined;
    data["fullName"] = this.fullName;
    return data;
  }

  clone(): CategoryForDropdownDto {
    const json = this.toJSON();
    let result = new CategoryForDropdownDto();
    result.init(json);
    return result;
  }
}

export interface ICategoryForDropdownDto {
  id: number;
  name: string | undefined;
  // parentCategory: CategoryForDropdownDto;
  fullName: string | undefined;
}


/**
* News
*/


export interface ICreateUpdateNewsDto {
  title: string;
  description: string;
  image: any;

}
export class CreateUpdateNewsDto implements ICreateUpdateNewsDto {
  title: string;
  description: string;
  image: any;
  constructor(data?: ICreateUpdateNewsDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {


      this.title = _data["title"];
      this.description = _data["description"];
      this.image = _data["image"];
    }
  }

  static fromJS(data: any): CreateUpdateNewsDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdateNewsDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["title"] = this.title;
    data["description"] = this.description;
    data["image"] = this.image;
    return data;
  }

  clone(): CreateUpdateNewsDto {
    const json = this.toJSON();
    let result = new CreateUpdateNewsDto();
    result.init(json);
    return result;
  }
}


export interface IReadNewsDto {
  id: number;
  title: string;
  description: string;
  imagePath: any;
}

export class ReadNewsDto implements IReadNewsDto {
  id: number;
  title: string;
  description: string;
  imagePath: any;

  constructor(data?: ReadNewsDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.title = _data["title"];
      this.description = _data["description"];
      this.imagePath = _data["imagePath"];
    }
  }

  static fromJS(data: any): ReadNewsDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadNewsDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["title"] = this.title;
    data["description"] = this.description;
    data["imagePath"] = this.imagePath;
    return data;
  }

  clone(): ReadNewsDto {
    const json = this.toJSON();
    let result = new ReadNewsDto();
    result.init(json);
    return result;
  }
}
/**
* page
*/


export interface ICreateUpdatePageDto {
  title: string;
  description: string;
  imagePath: any;
  image_title: string;
  image_description: string;
}
export class CreateUpdatePageDto implements ICreateUpdatePageDto {
  title: string;
  description: string;
  imagePath: any;
  image_title: string;
  image_description: string;
  constructor(data?: ICreateUpdatePageDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.title = _data["title"];
      this.description = _data["description"];
      this.image_title = _data["image_title"];
      this.image_description = _data["image_description"];
      this.imagePath = _data["imagePath"];
    }
  }

  static fromJS(data: any): ICreateUpdatePageDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdatePageDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["title"] = this.title;
    data["imagePath"] = this.imagePath;
    data["description"] = this.description;
    data["image_title"] = this.image_title;
    data["image_description"] = this.image_description;

    return data;
  }

  clone(): CreateUpdatePageDto {
    const json = this.toJSON();
    let result = new CreateUpdatePageDto();
    result.init(json);
    return result;
  }
}


export interface IReadPageDto {
  id: number;
  title: string;
  description: string;
  imagePath: any;
  image_title: string;
  image_description: string;
  slug:string;
}

export class ReadPageDto implements IReadPageDto {
  id: number;
  title: string;
  description: string;
  imagePath: any;
  image_title: string;
  image_description: string;
  slug:string;
  constructor(data?: ReadPageDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.title = _data["title"];
      this.description = _data["description"];
      this.imagePath = _data["imagePath"];
      this.image_title = _data["image_title"];
      this.image_description = _data["image_description"];
      this.slug = _data["sulg"];
    }
  }

  static fromJS(data: any): ReadPageDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadPageDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["title"] = this.title;
    data["description"] = this.description;
    data["imagePath"] = this.imagePath;
    data["image_title"] = this.image_title;
    data["image_description"] = this.image_description;
    data["sulg"] = this.slug;
    return data;
  }

  clone(): ReadPageDto {
    const json = this.toJSON();
    let result = new ReadPageDto();
    result.init(json);
    return result;
  }
}


/**
* template
*/


export interface ICreateUpdateTemplateDto {
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  numberOfColumns:number;
  link_title: string;
  child_templates:CreateUpdateChildTemplateDto []
  page_slug:string;
}
export class CreateUpdateTemplateDto implements ICreateUpdateTemplateDto {
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  numberOfColumns:number;
  link_title: string;
  page_slug:string;
  child_templates:CreateUpdateChildTemplateDto []
  constructor(data?: ICreateUpdateTemplateDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.type = _data["type"];
      this.title = _data["title"];
      this.description = _data["description"];
      this. link_title= _data["link_title"];
      this.imagePath = _data["imagePath"];
      this.videoPath = _data["videoPath"];
      this.numberOfColumns  = _data["numberOfColumns"];
      this.page_slug  = _data["page_slug"];


    //   if (Array.isArray(_data["childrenTemplates"])) {
    //     this.childrenTemplates = [] as any;
    //     for (let item of _data["childrenTemplates"])
    //         this.childrenTemplates.push(CreateUpdateChildTemplateDto.fromJS(item));
    // }
    }
  }

  static fromJS(data: any): CreateUpdateTemplateDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdateTemplateDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["title"] = this.title;
    data["type"] = this.type;
    data["imagePath"] = this.imagePath;
    data["description"] = this.description;
    data["link_title"] = this.link_title;
    data["page_slug"] = this.page_slug;
    data["numberOfColumns"] = this.numberOfColumns;
    data["videoPath"] = this.videoPath;
    if (Array.isArray(this.child_templates)) {
      data["child_templates"] = [];
      for (let item of this.child_templates)
          data["child_templates"].push(item.toJSON());
  }
    return data;
  }

  clone(): CreateUpdateTemplateDto {
    const json = this.toJSON();
    let result = new CreateUpdateTemplateDto();
    result.init(json);
    return result;
  }
}


export interface IReadTemplateDto {
  id:number;
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  numberOfColumns:number;
  link_title: string;
  child_templates:CreateUpdateChildTemplateDto []
  page_slug:string;
}

export class ReadTemplateDto implements IReadTemplateDto {
  id:number
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  numberOfColumns:number;
  link_title: string;
  page_slug:string;
  child_templates:CreateUpdateChildTemplateDto []
  constructor(data?: ReadTemplateDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.title = _data["title"];
      this.description = _data["description"];
      this.type = _data["type"];
      this.link_title = _data["link_title"];
      this.imagePath = _data["imagePath"];
      this.numberOfColumns = _data["numberOfColumns"];
      this.page_slug = _data["page_slug"];
    if (Array.isArray(_data["child_templates"])) {
      this.child_templates = [] as any;
      for (let item of _data["child_templates"])
          this.child_templates.push(CreateUpdateChildTemplateDto.fromJS(item));
  }

    }
  }

  static fromJS(data: any): ReadTemplateDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadTemplateDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["title"] = this.title;
    data["description"] = this.description;
    data["imagePath"] = this.imagePath;
    data["type"] = this.type;
    data["link_title"] = this.link_title;
    data["numberOfColumns"] = this.numberOfColumns;
    data["page_slug"] = this.page_slug;
    if (Array.isArray(this.child_templates)) {
      data["child_templates"] = [];
      for (let item of this.child_templates)
          data["child_templates"].push(item.toJSON());
  }

    return data;
  }

  clone(): ReadTemplateDto {
    const json = this.toJSON();
    let result = new ReadTemplateDto();
    result.init(json);
    return result;
  }
}



/**
* chlid template
*/


export interface ICreateUpdateChildTemplateDto {
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  link_title: string;
  parentTemplateId:number;
  page_slug:string;

}
export class CreateUpdateChildTemplateDto implements ICreateUpdateChildTemplateDto {
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  link_title: string;
  parentTemplateId:number;
  page_slug:string;

  constructor(data?: ICreateUpdateChildTemplateDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.type = _data["type"];
      this.title = _data["title"];
      this.description = _data["description"];
      this. link_title= _data["link_title"];
      this.imagePath = _data["imagePath"];
      this.videoPath = _data["videoPath"];
      this.parentTemplateId = _data["parentTemplateId"];
      this. page_slug = _data["page_slug"];

    }
  }

  static fromJS(data: any): CreateUpdateChildTemplateDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdateChildTemplateDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["title"] = this.title;
    data["type"] = this.type;
    data["imagePath"] = this.imagePath;
    data["description"] = this.description;
    data["link_title"] = this.link_title;
    data["parentTemplateId"] = this.parentTemplateId;
    data["page_slug"] = this.page_slug;

    return data;
  }

  clone(): CreateUpdateChildTemplateDto {
    const json = this.toJSON();
    let result = new CreateUpdateChildTemplateDto();
    result.init(json);
    return result;
  }
}


export interface IReadChildTemplateDto {
  id:number;
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  link_title: string;
  parentTemplateId:number;
  page_slug:string;
}

export class ReadChildTemplateDto implements IReadChildTemplateDto {
  id:number
  type: number;
  title: string;
  description: string;
  imagePath: any;
  videoPath:any;
  link_title: string;
  parentTemplateId:number;
  page_slug:string;


  constructor(data?: ReadChildTemplateDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.title = _data["title"];
      this.description = _data["description"];
      this.type = _data["type"];
      this.link_title = _data["link_title"];
      this.imagePath = _data["imagePath"];
      this.parentTemplateId = _data["parentTemplateId"];
      this.page_slug = _data["page_slug"];

    }
  }

  static fromJS(data: any): ReadChildTemplateDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadChildTemplateDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["title"] = this.title;
    data["description"] = this.description;
    data["imagePath"] = this.imagePath;
    data["type"] = this.type;
    data["link_title"] = this.link_title;
    data["parentTemplateId"] = this.parentTemplateId;
    data["page_slug"] = this.page_slug;


    return data;
  }

  clone(): ReadChildTemplateDto {
    const json = this.toJSON();
    let result = new ReadChildTemplateDto();
    result.init(json);
    return result;
  }
}



/**
* page template
*/

export interface ICreateUpdatePageTemplateDto {
pageId:number;
templateId:number;
order:number;
//
}
export class CreateUpdatePageTemplateDto implements ICreateUpdatePageTemplateDto {
  pageId:number;
  templateId:number;
  order:number;
  // page_slug:string;

  constructor(data?: ICreateUpdatePageTemplateDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.pageId = _data["pageId"];
      this.templateId = _data["templateId"];
      this.order = _data["order"];
      // this. page_slug= _data["page_slug"];


    }
  }

  static fromJS(data: any): CreateUpdatePageTemplateDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUpdatePageTemplateDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["pageId"] = this.pageId;
    data["templateId"] = this.templateId;
    data["order"] = this.order;
    // data["page_slug"] = this.page_slug;


    return data;
  }

  clone(): CreateUpdatePageTemplateDto {
    const json = this.toJSON();
    let result = new CreateUpdatePageTemplateDto();
    result.init(json);
    return result;
  }
}


export interface IReadPageTemplateDto {
  id:number;
  pageId:number;
  templateId:number;
  order:number;
  page_slug:string;
}

export class ReadPageTemplateDto implements IReadPageTemplateDto {
  id:number;
  pageId:number;
  templateId:number;
  order:number;
  page_slug:string;
  constructor(data?: ReadPageTemplateDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }


  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.pageId = _data["pageId"];
      this.templateId = _data["templateId"];
      this.order = _data["order"];
      this.page_slug = _data["page_slug"];

    }
  }

  static fromJS(data: any): ReadPageTemplateDto {
    data = typeof data === 'object' ? data : {};
    let result = new ReadPageTemplateDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["pageId"] = this.pageId;
    data["templateId"] = this.templateId;
    data["order"] = this.order;
    data["page_slug"] = this.page_slug;

    return data;
  }

  clone(): ReadPageTemplateDto {
    const json = this.toJSON();
    let result = new ReadPageTemplateDto();
    result.init(json);
    return result;
  }
}




////previousTamplates

export class PreviousTamplatesDto{
  id:any;
  templateName:any;
  order:any;
}

// contact-us


export interface ICreateUpdateContactDto {
  name:string;
  email:string;
  message:string;
  //
  }
  export class CreateUpdateContactDto implements ICreateUpdateContactDto {
    name:string;
    email:string;
    message:string;
  
    constructor(data?: ICreateUpdateContactDto) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.name = _data["name"];
        this.email = _data["email"];
        this.message = _data["message"];
        // this. page_slug= _data["page_slug"];
  
  
      }
    }
  
    static fromJS(data: any): CreateUpdateContactDto {
      data = typeof data === 'object' ? data : {};
      let result = new CreateUpdateContactDto();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["name"] = this.name;
      data["email"] = this.email;
      data["message"] = this.message;
      // data["page_slug"] = this.page_slug;
  
  
      return data;
    }
  
    clone(): CreateUpdateContactDto {
      const json = this.toJSON();
      let result = new CreateUpdateContactDto();
      result.init(json);
      return result;
    }
  }
  
  
  export interface IReadContactDto {
    id:number;
    name:string;
    email:string;
    message:string;
  
  }
  
  export class ReadContactDto implements IReadContactDto {
    id:number;
    name:string;
    email:string;
    message:string;
    constructor(data?: ReadContactDto) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
  
    init(_data?: any) {
      if (_data) {
        this.id = _data["id"];
        this.name = _data["name"];
        this.email = _data["email"];
        this.message = _data["message"];
       
  
      }
    }
  
    static fromJS(data: any): ReadContactDto {
      data = typeof data === 'object' ? data : {};
      let result = new ReadContactDto();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["name"] = this.name;
      data["email"] = this.email;
      data["message"] = this.message;
     
  
      return data;
    }
  
    clone(): ReadContactDto {
      const json = this.toJSON();
      let result = new ReadContactDto();
      result.init(json);
      return result;
    }
  }
  

