# coding: utf-8
path='/Users/samuelhu/musicsite/'
pathIn='/Users/samuelhu/musicsite/songinput/'
pathOut='/Users/samuelhu/musicsite/songoutput/'

import os
from unidecode import unidecode

print "正在读取文件列表"
list = []
for root,dirs,files in os.walk(pathIn):
    for fn in files:
        name, ext = os.path.splitext(fn)
        if ext == ".md":
            list.append(fn)

def findBetween(original, start, end):
    a = original.find(start) + len(start)
    b = a + original[a:].find(end)
    return original[a:b]

def insertBetween(original, start, end, insert):
    a = original.find(start) + len(start)
    b = a +original[a:].find(end)
    t = original[:a] + insert + original[b:]
    return t

jd = '''['''
dictString = ''

for fn in list:
    filePath = pathIn + fn
    f = open(filePath, 'r')
    t = f.read()
    f.close()

    title = findBetween(t, "title:", "\n")
    imagesrc = findBetween(t, "imagesource:", "\n")
    songsrc = findBetween(t,"songsource:", "\n")
    text = findBetween(t, "text:", "\n")
    lyric = findBetween(t, "lyric:", "＊")

    t = '''{"title":"%s","imagesrc":"%s","songsrc":"%s","text":"%s","lyric":"%s"},'''%(title,imagesrc,songsrc,text,lyric)
    t = t.replace("'","\\'")
    jd += t
jd = jd[:-1] + ''']'''
o = open(pathOut + 'output.json', 'w')
o.write(jd)
o.close
