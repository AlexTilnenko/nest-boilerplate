import { Injectable } from '@nestjs/common';
import { XMLParser, XMLBuilder} from 'fast-xml-parser';

@Injectable()
export class FormatParserService {
  private XMLParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix : '',
    textNodeName: 'val',
    ignorePiTags: true,
  })
  private XMLBuilder = new XMLBuilder({
    attributeNamePrefix: '_',
    ignoreAttributes: false
  });

  public xmlToJson(xmlData: string): object {
    return this.XMLParser.parse(xmlData);
  }

  public jsToXml(object: object): string {
    return this.XMLBuilder.build(object);
  }
}
