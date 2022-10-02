import React from "react";
import styled from "styled-components";

function Comments() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  `;
  const AddComment = styled.div`
    margin-top: 30px;
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
  `;
  const Img = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #cccccc;
  `;
  const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 0.1px solid #161616;
    color: #fff;
  `;
  const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    color: #9c9c9c;
    font-size: 15px;
  `;
  const Comment = styled.div`
    display: flex;
    margin: 10px 0;
    gap: 20px;
    align-items: center;
  `;
  const Profile = styled.div`
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #cccccc;
  `;
  const Name = styled.div`
    color: #cacaca;
    font-size: 14px;
    font-weight: 600;
  `;
  const Text = styled.span`
    color: #9c9c9c;
    font-size: 15px;
  `;
  const Time = styled.span`
    color: #9c9c9c;
    font-size: 12px;
  `;

  return (
    <Container>
      <AddComment>
        <Img />
        <Input placeholder="Yorum ekle..." />
      </AddComment>

      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time> 1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
      <Comment>
        <Profile />
        <Detail>
          <Name>
            Karaaslan <Time>1 gün önce</Time>
          </Name>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            commodi neque saepe veritatis at aspernatur cumque. Aspernatur odit
            natus reiciendis commodi dolorum, incidunt dolor, voluptas provident
            dignissimos temporibus, repellendus harum.
          </Text>
        </Detail>
      </Comment>
    </Container>
  );
}

export default Comments;
