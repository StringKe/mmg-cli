import {Command} from 'commander';
import * as path from "path";
import * as fs from "fs";

import {parser as MMGParser} from "@stringke/mmg";
import {Schema} from "./schema.type";

const packageJson = require('../package.json');
const version: string = packageJson.version;

const program = new Command();

program
    .version(version)
    .name('mmg')
    .option('-f, --file <file>', 'schema file', 'schema.prisma')
    .parse(process.argv);

const {file} = program.opts();

const schemaFilePath = path.resolve(__dirname, file)
if (!fs.existsSync(schemaFilePath)) {
    console.error(`Schema file not exists ${schemaFilePath}`)
} else {
    const fileContent = fs.readFileSync(schemaFilePath).toString('utf-8');
    const parserObjectStr = MMGParser(fileContent);
    const parserObject = JSON.parse(parserObjectStr) as Schema;

    parserObject.tops.map(table => {
        console.log(table)
    })

    // console.info()
    // console.info()
    // console.log(parserObjectStr)
}


