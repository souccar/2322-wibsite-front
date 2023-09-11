/**
 * Category
 */
export interface ICreateCategoryDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;
}
export class CreateCategoryDto implements ICreateCategoryDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;

  constructor(data?: ICreateCategoryDto) {
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
          // if (Array.isArray(_data["images"])) {
          //     this.images = [] as any;
          //     for (let item of _data["images"])
          //         this.images.push(CreateCategoryImageDto.fromJS(item));
          // }
      }
  }

  static fromJS(data: any): CreateCategoryDto {
      data = typeof data === 'object' ? data : {};
      let result = new CreateCategoryDto();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["name"] = this.name;
      data["description"] = this.description;
      data["point"] = this.point;
      data["image"] = this.image;
      // data["parentCategoryId"] = this.parentCategoryId;
      // if (Array.isArray(this.images)) {
      //     data["images"] = [];
      //     for (let item of this.images)
      //         data["images"].push(item.toJSON());
      // }
      return data;
  }

  clone(): CreateCategoryDto {
      const json = this.toJSON();
      let result = new CreateCategoryDto();
      result.init(json);
      return result;
  }
}

/**
 * skin type
 */

export interface ICreateSkinTypeDto {
    name: string | undefined;
  }

  export class CreateSkinTypeDto implements ICreateSkinTypeDto {
    name: string | undefined;
 
  
    constructor(data?: ICreateCategoryDto) {
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
  
    static fromJS(data: any): CreateSkinTypeDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateCategoryDto();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data;
    }
  
    clone(): CreateCategoryDto {
        const json = this.toJSON();
        let result = new CreateCategoryDto();
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

  export interface ICreateBrandDto {
    name: string | undefined;

  }
  export class CreateBrandDto implements ICreateBrandDto {
    name: string | undefined;
   
  
    constructor(data?: ICreateCategoryDto) {
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
  
    static fromJS(data: any): CreateBrandDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateBrandDto();
        result.init(data);
        return result;
    }
  
    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
  
        return data;
    }
  
    clone(): CreateBrandDto {
        const json = this.toJSON();
        let result = new CreateBrandDto();
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
  