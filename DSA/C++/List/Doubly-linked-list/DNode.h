#ifndef DNODE_H
#define DNODE_H

#include <string>
#include <iostream>
using namespace std;

class DNode
{
private:
  string word;
  DNode *prev;
  DNode *next;
  friend class DList;
public:
  DNode(const string& word = "");
  void change(const string &newWord);
  string getValue();
  DNode* getNext();
};

DNode::DNode(const string& word)
{
  this->word = word;
}

void DNode::change(const string &newWord)
{
  word = newWord;
}

string DNode::getValue()
{
  return word;
}

DNode* DNode::getNext()
{
  return next;
}

ostream& operator<<(ostream& out, DNode& node)
{
  out << "<" << node.getValue() << ">";
  return out;
}

#endif