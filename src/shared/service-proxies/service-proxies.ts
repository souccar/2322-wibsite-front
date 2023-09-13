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
  name: string | undefined;
  description: string | undefined;
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
          // if (Array.isArray(_data["images"])) {
          //     this.images = [] as any;
          //     for (let item of _data["images"])
          //         this.images.push(CreateCategoryImageDto.fromJS(item));
          // }
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
      // data["parentCategoryId"] = this.parentCategoryId;
      // if (Array.isArray(this.images)) {
      //     data["images"] = [];
      //     for (let item of this.images)
      //         data["images"].push(item.toJSON());
      // }
      return data;
  }

  clone(): CreateUpdateCategoryDto {
      const json = this.toJSON();
      let result = new CreateUpdateCategoryDto();
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
