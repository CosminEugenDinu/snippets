#ifndef DLIST_H
#define DLIST_H

#include <string>
#include <iostream>
#include <fstream>
#include "DNode.h"
#include "DListErrors.h"
using namespace std;

class DList
{
private:
  DNode *header;
  DNode *trailer;
  int length;

public:
  DList();
  ~DList();

  void addAfter(DNode *node, const string &word);
  void addFirst(const string &word);
  void addLast(const string &word);

  DNode *getAfter(DNode *node);
  DNode *getFirst();
  DNode *getLast();
  DNode *search(const string &word);

  string remove(DNode *node);
  string removeFirst();
  string removeLast();

  int size();

  void readWords(const string &row);

  string str();

  bool saveFile(const string &path);
  bool readFile(const string &path);

  friend ostream &operator<<(ostream &out, const DList &list);
};

DList::DList()
    : length(0)
{
  header = new DNode;
  trailer = new DNode;
  header->next = trailer;
  trailer->prev = header;
}

DList::~DList()
{
  while (size() != 0)
  {
    removeFirst();
  }
  delete header;
  delete trailer;
}

void DList::addAfter(DNode *node, const string &word)
{
  DNode *newNode = new DNode(word);
  newNode->next = node->next;
  newNode->prev = node;
  (node->next)->prev = newNode;
  node->next = newNode;
  length += 1;
}
void DList::addFirst(const string &word)
{
  addAfter(header, word);
}
void DList::addLast(const string &word)
{
  addAfter(trailer->prev, word);
}

DNode *DList::getAfter(DNode *node)
{
  return node->next;
}
DNode *DList::getFirst()
{
  return getAfter(header);
}

DNode *DList::getLast()
{
  return trailer->prev;
}

DNode *DList::search(const string &word)
{
  DNode *cursor = header->next;
  while (cursor != trailer)
  {
    if (word == cursor->word)
      return cursor;
    cursor = cursor->next;
  }
  return NULL;
}

string DList::remove(DNode *node)
{
  if (size() == 0)
    throw DListEmptyException("Cannot remove on empty list!");
  string word = node->word;
  (node->prev)->next = node->next;
  (node->next)->prev = node->prev;
  delete node;
  length -= 1;
  return word;
}

string DList::removeFirst()
{
  return remove(header->next);
}

string DList::removeLast()
{
  return remove(trailer->prev);
}

int DList::size()
{
  return length;
}

string DList::str()
{
  string row = "";
  DNode* cursor = header->next;
  while (cursor != trailer)
  {
    row += cursor->word + " ";
    cursor = cursor->next;
  }
  return row;
}

void DList::readWords(const string &row)
{
  string word;
  char ch;
  int endLine;
  endLine = row.length();
  for (int i = 0; i < endLine; i++)
  {
    ch = row[i];
    if (ch == 32) // split on space
    {
      addLast(word);
      word = "";
      continue;
    }
    word += ch;
    if (i == endLine - 1) // end of line
    {
      addLast(word);
      word = "";
    }
  }
}

bool DList::saveFile(const string &path)
{
  ofstream outFile;
  outFile.open(path);
  outFile << str() << endl;
  outFile.close();
  return true;
}
bool DList::readFile(const string &path)
{
  ifstream inFile;
  inFile.open(path);
  string line;
  getline(inFile, line);
  readWords(line);
  inFile.close();
  return true;
}

ostream &operator<<(ostream &out, const DList &list)
{
  DNode *cursor = list.header->getNext();
  while (cursor != list.trailer)
  {
    out << "<" << cursor->getValue() << ">";
    cursor = cursor->getNext();
  }
  return out;
}

#endif