export interface ICreateCategoryDto {
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategoryId: number | undefined;
  image: any;
}

export class CreateCategoryDto implements ICreateCategoryDto {
  name: string;
  description: string;
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
export interface IReadCategoryDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategory: ReadCategoryDto;
  images:any;
}
export class ReadCategoryDto implements IReadCategoryDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  // parentCategory: ReadCategoryDto;
  images:any;


  constructor(data?: IReadCategoryDto) {
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
          // this.parentCategory = _data["parentCategory"] ? ReadCategoryDto.fromJS(_data["parentCategory"]) : <any>undefined;
          // if (Array.isArray(_data["images"])) {
          //     this.images = [] as any;
          //     for (let item of _data["images"])
          //         this.images.push(ReadCategoryImageDto.fromJS(item));
          // }

      }
  }

  static fromJS(data: any): ReadCategoryDto {
      data = typeof data === 'object' ? data : {};
      let result = new ReadCategoryDto();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
      data["name"] = this.name;
      data["description"] = this.description;
      data["point"] = this.point;
      // data["parentCategory"] = this.parentCategory ? this.parentCategory.toJSON() : <any>undefined;
      // if (Array.isArray(this.images)) {
      //     data["images"] = [];
      //     for (let item of this.images)
      //         data["images"].push(item.toJSON());
      // }

      return data;
  }

  clone(): ReadCategoryDto {
      const json = this.toJSON();
      let result = new ReadCategoryDto();
      result.init(json);
      return result;
  }
}

export interface ICreateProductDto {
  id: number;
  name: string;
  description: string;
  point: number;
  categoryId: number;
  images: any[];
  sizes:any[];
  // images: CreateProductImageDto[] | undefined;
  // sizes: CreateProductSizeDto[] | undefined;
}
export class CreateProductDto implements ICreateProductDto {
  id: number;
  name: string;
  description: string;
  point: number;
  categoryId: number;
  images: any[];
  sizes:any[];
  // images: CreateProductImageDto[] | undefined;
  // sizes: CreateProductSizeDto[] | undefined;

  constructor(data?: ICreateProductDto) {
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
          this.categoryId = _data["categoryId"];
          // if (Array.isArray(_data["images"])) {
          //     this.images = [] as any;
          //     for (let item of _data["images"])
          //         this.images.push(CreateProductImageDto.fromJS(item));
          // }
          // if (Array.isArray(_data["sizes"])) {
          //     this.sizes = [] as any;
          //     for (let item of _data["sizes"])
          //         this.sizes.push(CreateProductSizeDto.fromJS(item));
          // }
      }
  }

  static fromJS(data: any): CreateProductDto {
      data = typeof data === 'object' ? data : {};
      let result = new CreateProductDto();
      result.init(data);
      return result;
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["id"] = this.id;
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

  clone(): CreateProductDto {
      const json = this.toJSON();
      let result = new CreateProductDto();
      result.init(json);
      return result;
  }
}
export interface ICategoryForDropdownDto {
  id: number;
  name: string | undefined;
  parentCategory: CategoryForDropdownDto;
  fullName: string | undefined;
}
export class CategoryForDropdownDto implements ICategoryForDropdownDto {
  id: number;
  name: string | undefined;
  parentCategory: CategoryForDropdownDto;
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
          this.parentCategory = _data["parentCategory"] ? CategoryForDropdownDto.fromJS(_data["parentCategory"]) : <any>undefined;
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
      data["parentCategory"] = this.parentCategory ? this.parentCategory.toJSON() : <any>undefined;
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
export interface IReadProductDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  categoryId: number | undefined;
  category: ReadCategoryDto;
  images:any[];
  sizes: any[];
  // images: ReadProductImageDto[] | undefined;
  // sizes: ReadProductSizeDto[] | undefined;
}
export class ReadProductDto implements IReadProductDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  categoryId: number | undefined;
  category: ReadCategoryDto;
  images:any[];
  sizes: any[];
  // images: ReadProductImageDto[] | undefined;
  // sizes: ReadProductSizeDto[] | undefined;

  constructor(data?: IReadProductDto) {
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
          this.categoryId = _data["categoryId"];
          this.category = _data["category"] ? ReadCategoryDto.fromJS(_data["category"]) : <any>undefined;
          // if (Array.isArray(_data["images"])) {
          //     this.images = [] as any;
          //     for (let item of _data["images"])
          //         this.images.push(ReadProductImageDto.fromJS(item));
          // }
          // if (Array.isArray(_data["sizes"])) {
          //     this.sizes = [] as any;
          //     for (let item of _data["sizes"])
          //         this.sizes.push(ReadProductSizeDto.fromJS(item));
          // }
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
      data["categoryId"] = this.categoryId;
      data["category"] = this.category ? this.category.toJSON() : <any>undefined;
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

  clone(): ReadProductDto {
      const json = this.toJSON();
      let result = new ReadProductDto();
      result.init(json);
      return result;
  }
}
