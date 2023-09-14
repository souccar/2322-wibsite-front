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
  id:number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;
}

export class ReadCategoryDto implements IReadCategoryDto {
  id:number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;


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
          this.image = _data["image"];
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
      data["image"] = this.image;

      return data;
  }

  clone(): ReadBrandDto {
      const json = this.toJSON();
      let result = new ReadBrandDto();
      result.init(json);
      return result;
  }
}
export interface IReadCategoryDto {
  id:number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;
}

export class ReadCategoryDto implements IReadCategoryDto {
  id:number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;


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
          this.image = _data["image"];
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
      data["image"] = this.image;

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
    id:number;
    name: string | undefined;
  }


  export class ReadSkinTypeDto implements IReadSkinTypeDto {
    id:number;
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
    id:number;
    name: string | undefined;
  }


  export class ReadBrandDto implements IReadBrandDto {
    id:number;
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
 * Products
 */

 export interface ICreateUpdateProductDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  categoryId: number | undefined;
  images:any[];
  sizes:any[];
}
export class CreateUpdateProductDto implements ICreateUpdateProductDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  categoryId: number | undefined;
  images:any[];
  sizes:any[];
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

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["description"] = this.description;
    data["point"] = this.point;
    data["categoryId"] = this.categoryId;
    if (Array.isArray(this.images)) {
        data["images"] = [];
        for (let item of this.images)
            data["images"].push(item.toJSON());
    }
    if (Array.isArray(this.sizes)) {
        data["sizes"] = [];
        for (let item of this.sizes)
            data["sizes"].push(item.toJSON());
    }
    return data;
  }

  clone(): CreateUpdateCategoryDto {
      const json = this.toJSON();
      let result = new CreateUpdateCategoryDto();
      result.init(json);
      return result;
  }
}
  export interface IReadProductDto {
    id:number;
    name: string | undefined;
    description: string | undefined;
    point: number;
    // parentCategoryId: number | undefined;
    images:any[];
  }

  export class ReadProductDto implements IReadProductDto {
    id:number;
    name: string | undefined;
    description: string | undefined;
    point: number;
    // parentCategoryId: number | undefined;
    images:any[];


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
            // this.image = _data["image"];
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
        // data["image"] = this.image;

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
        title: string  ;
        description: string ;
        image:any;

      }
      export class CreateUpdateNewsDto implements ICreateUpdateNewsDto {
        title: string ;
        description: string ;
        image:any;
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
        id:number;
        title: string ;
        description: string ;
        image: any;
      }

      export class ReadNewsDto implements IReadNewsDto {
        id:number;
        title: string ;
        description: string ;
        image: any;

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
                this.image = _data["image"];
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
            data["image"] = this.image;
            return data;
        }

        clone(): ReadNewsDto {
            const json = this.toJSON();
            let result = new ReadNewsDto();
            result.init(json);
            return result;
        }
      }
