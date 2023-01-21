import {Link} from 'react-router-dom'
import './index.scss'
import React from 'react';
import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Typewriter from "typewriter-effect";
// import typeyazici from "../Typewriterdl/typeyazici.js "


const Home = () => 
{
    const [letterClass, setLetterClass] = useState('text-animate')
    const headtitle = ['A','n','a',' ','M','e','k','a','n','-//-','B','ö','l','g','e', ]






    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timer)
        }
    });
    

    return (
        <>
        <div className = "container home-page">
            <div className="text-zone">
                <h1 REFL-TEXT = "¿?Benvenuto nel mondo vero¿?">
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={headtitle}
                    idx= {8}
                    />
                </h1>
                <h2>Bu Web sitesinin tarafımca kodlanmasının sebebi, <br/>
                birbirinden değerli ekip üyelerimizin yeteneklerini sergilemek. <br/>
                Hali hazırda kullanılan projelerimizi sizlerin gözleri önüne sunmak <br/> ve yapabileceğimiz yeni projeler üzerine sizlerle iletişime geçmektir.
                <br/>
                <br/>

                Yazılım alanında herhangi bir konu üzerine çekinmeden, iletişim bölümünden sorularınızı bize  
                iletebilirsiniz. Anlayacağınız üzere teknoloji dünyanın şekillenmesinde aktif bir rol oynamakta 
                dolayısıyla uğraştığınız sektör her ne olursa olsun, bizlerin yapacağı ufak bir dokunuş dahi 
                sizleri alanınızda rakip tanımayacak bir hale getirecektir. <br/><br/>

                Özet olarak ben ve ekibim yazılım alanında kendisini yetiştirmiş bir grubuz, 
                temel gayemiz bize sunmuş olduğunuz projelerinizi olabilecek en yetkin ve en hızlı şekilde, 
                sizlere teslim etmek, web sitemize kısaca göz atmanız takdirinde 
                Curriculum Vitae'lerimize ulaşabilirsiniz, Saygılar.
                </h2>            
                
            </div>
                {/* <div className = 'text-movement-class'>
                <TypeWriter text={'Hello guys I am from the underworld !'}/>
                </div> */}

            {/* <div className='button-row'>
                <button className= "active neon-btn">
                    <i className='material-icons'>wifi</i>
                </button>
            </div> */}

            {/* <div className = 'text'>
                <typeyazici />
            
            </div> */}



            <div className='onetext'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50)
                        typewriter.pause(500)
                        typewriter.pasteString('User Root;')
                        .changeDelay(50)
                        .start();
                    }}
                    />
            </div>





            <div className='text'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50)
                        typewriter.pause(500)
                        typewriter.pasteString('using System;')
                        .changeDelay(50)
                        .start();
                    }}
                    />
            </div>
            
            <div className='text1'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('namp -p21, 80, 443, 63, 192.###.###.1.1' )
                        typewriter.deleteAll()                                               
                        typewriter.typeString('BOT_TOKEN = str(environ.get("BOT_TOKEN"))')
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('_______________________1¶¶¶_______________________') 
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text2'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('msf > use exploit/your/brain/knows/everything/some_flash-shader_doin_stuff' )
                        typewriter.deleteAll()                        
                        
                        typewriter.typeString('PING_INTERVAL = int(environ.get("PING_INTERVAL", "1200"))')
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('________________________¶¶¶_______________________') 
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text3'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('def get_categories (self): letters = string.ascii_uppercase, result = list' )
                        typewriter.deleteAll()
                        typewriter.typeString('HAS_SSL = True if str(HAS_SSL).lower() == "true" else False') 
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('________________________¶¶¶_______________________')                         
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text4'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('def ge_all_happy_links(self, source): drug_elements = source.find("ul', )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('sys.exit("Hash length should be greater than 5 and less than 64")')
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)  
                        typewriter.typeString('___________¶1___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1___¶¶__________')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text5'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('def start(update, source): update.message.reply_text("Merhaba Hoşgeldiniz!"' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('("s" if HAS_SSL else "", FQDN, "" if NO_PORT else ":" + str(PORT)')
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('_________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________') 
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text6'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('disp.add_handler(teleg.ext.CommandHandler("start", start')
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('if not ON_HEROKU or environ.get("FQDN") else APP_NAME + ".loooooooool.c".... ')
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('_________¶¶¶¶¶¶¶¶______¶¶¶¶1_____1¶¶¶¶¶¶¶1________')  
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text7'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('return element != null && element.Displayed && element.Enabled ? element : null' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString(' BIND_ADDRESS = str(environ.get("WEB_SERVER_BIND_ADDRESS", "0.0.0.0")) ')
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)  
                        typewriter.typeString('__________¶¶¶___________¶¶¶___________¶¶¶_________')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text8'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('var wait = new WebDriverWait(driver, delay)' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('await server.cleanup() await StreamBot.stop()' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)  
                        typewriter.typeString('__________¶¶¶___________¶¶¶___________¶¶¶_________')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text9'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('wait.Until(d => !d.FindElement(By.CssSelector("[is-loading= loading]")).Displayed)' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('logging.info(f"Client {index} is now serving {request.remote}")' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('________¶¶¶¶¶¶__________¶¶¶__________¶¶¶¶¶________')  
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text10'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('var element = FindElement(driver, By.CssSelector("[ng-show=AnalysisVisible]"),' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('except (AttributeError, BadStatusLine, ConnectionResetError): pass pass pass' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('________¶¶¶¶¶¶__________¶¶¶__________¶¶¶¶¶________') 
                        .start(); 
                    }}
                    
                    />
            </div>
            <div className='text11'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('part_count = math.ceil(until_bytes / chunk_size) - math.floor(offset / chunk_size)' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('if "video/" in mime_type or "audio/" in mime_type or "/html" in mime_type:' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('________¶__¶_¶__________¶¶¶_________1¶_¶_¶1_______')  
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text12'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('var element = FindElement(driver, By.CssSelector("[ng-show=AnalysisVisible]"),' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('file_id = await tg_connect.get_file_properties(message_id)' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('_______1¶_¶¶_¶¶_________¶¶¶_________¶1_¶_1¶_______')  
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text13'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('until_bytes = int(until_bytes) if until_bytes else file_size - 1,' )
                        typewriter.deleteAll()                         
                       
                        typewriter.typeString('file_id, index, offset, first_part_cut, last_part_cut, part_count, chunk_size' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll() 
                        typewriter.pause(600)
                        typewriter.typeString('_______¶¶_1¶__¶_________¶¶¶________¶¶__¶__¶¶______') 
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text14'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('from pyrogram.types import Message, InlineKeyboardMarkup, InlineKeyboardButton' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('stream_link = f"{Var.URL}{log_msg.id}/{quote_plus(get_name(m))}?hash={file_hash}' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('______¶¶__1¶__¶¶________¶¶¶________¶___¶___¶______')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text15'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('logging.info(f"Generated link: {stream_link} for {m.from_user.first_name}")' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('clients = await asyncio.gather(*[start_client(i, token) for i, token in all_tokens.items()])' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll() 
                        typewriter.pause(600)
                        typewriter.typeString('______¶___¶¶___¶1_______¶¶¶_______¶¶___¶___¶¶_____') 
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text16'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('var SymbolProto = typeof Symbol ! "undefined" ? Symbol.prototype : null;' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('_____¶¶___¶¶___1¶_______¶¶¶______1¶____¶____¶1____')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text17'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('function isBoolean(obj) return obj === true || obj === false || toString.call(obj) === {' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('function isElement(obj) { return !!(obj && obj.nodeType === 1);' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('____1¶____¶¶____¶¶______¶¶¶______¶1____¶____1¶____')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text18'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('var isDataView$1 = (hasStringTagBug ? ie10IsDataView : isDataView);' )
                        typewriter.deleteAll()                         
                       
                        typewriter.typeString('return typeof sizeProperty == number && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('____¶1____¶¶_____¶______¶¶¶_____¶¶_____¶_____¶¶___')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text19'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('var proto = (isFunction$1(constructor) && constructor.prototype)' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('___¶______¶¶______¶¶____¶¶¶____¶¶______¶______¶¶__')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text20'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString(' if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor &&' )
                        typewriter.deleteAll()                         
                     
                        typewriter.typeString('if (!eq(a[length], b[length], aStack, bStack)) return false;' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()
                        typewriter.pause(600)
                        typewriter.typeString('__¶________¶_______¶____¶¶¶____¶_______¶_______¶__') 
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text21'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('return methods !== weakMapMethods || !isFunction$1(obj[forEachName]);' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('  pairs[i] = [_keys[i], obj[_keys[i]]];key#$ke#$ykey#$keyke#$ykeykey#$ke#$ykey$$#$k#$ey' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll() 
                        typewriter.pause(600)
                        typewriter.typeString('¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text22'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('export { VERSION, after, every as all, allKeys, some as any, extendOwn as assign, before,' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString(' "keywords": ["util", "functional", "server", "client", "browser"],' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text23'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('assert.deepEqual(_.allKeys({one: 1, two: 2}), ["one", "two",,' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('assert.deepEqual(_.values({one: 1, two: 2}), [1, 2]; pass pass pass' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶___¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text24'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('var F = function() {}; By.CssSelector("[ng-show=AnalysisVisible]"),' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('result = _.pick({a: 1, b: 2, c: 3}, "a", "c"); assert.deepEqual(result, {b: 2, c: 3}, ')
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_____¶¶¶_____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1__')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text25'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('var callback = function(value, key, object) { Obj.prototype = {a: 1, b: 2, c: 3};' )
                        typewriter.deleteAll()                         
                    
                        typewriter.typeString('var moduleLines = moduleData.split("\n").length, pass pass pass' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('______1¶¶¶¶¶¶¶¶1___1¶¶¶¶¶¶¶¶¶¶¶____¶¶¶¶¶¶¶¶¶______')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text26'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('fs.readFile(fixtureName, {encoding: "utf8"}, function(error, fixtureData) {' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('ssert.ok(fixtureStats.size < moduleStats.size); connect pass' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______________')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text27'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('sudo su pwd root,  def : "class1" def : "class2" def : "class3" def : "class4" def : "class5"' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('connection cannot be established, pls try with another port.. 80, 443, 88, 335 etc.. ' )
                        typewriter.deleteAll()
                        typewriter.typeString('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('_______________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______________')
                        .start();
                    }}
                    
                    />
            </div>
            <div className='text28'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80)
                        typewriter.pause(600)
                        typewriter.typeString('SYSTEM !404!' )
                        typewriter.deleteAll()                         
                        
                        typewriter.typeString('if((dosya = fopen("ogrenci.txt", "w")) == NULL ) printf ("dosya olusturma islemi basarisiz /?n")   ' )
                        typewriter.deleteAll()
                        typewriter.typeString(' fscanf(dosya , "%d/t%s/t%d/n", &no,ad,&notu ) ;  printf("%d/t%s/t%d/n", no, ad, notu ) ;  printf("Okuma islemi tamamlanmistir saglicakla kaliniz.. /n") ;')
                        typewriter.deleteAll()  
                        typewriter.pause(600)
                        typewriter.typeString('________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______________')
                        .start();
                    }}
                    
                    />
            </div>

        </div>
        <Loader type='pacman' />
        </>
         
        
    );
}

export default Home