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
  