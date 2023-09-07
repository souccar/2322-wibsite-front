export interface ICreateCategoryDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  parentCategoryId: number | undefined;
  // images: CreateCategoryImageDto[] | undefined;
}
export class CreateCategoryDto implements ICreateCategoryDto {
  id: number=0;
  name: string | undefined;
  description: string | undefined;
  point: number=0;
  parentCategoryId: number | undefined;
  // images: CreateCategoryImageDto[] | undefined;

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
          this.id = _data["id"];
          this.name = _data["name"];
          this.description = _data["description"];
          this.point = _data["point"];
          this.parentCategoryId = _data["parentCategoryId"];
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
      data["id"] = this.id;
      data["name"] = this.name;
      data["description"] = this.description;
      data["point"] = this.point;
      data["parentCategoryId"] = this.parentCategoryId;
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
