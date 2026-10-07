import React from 'react';

// 1. Component Header 
function Header({ name, title, contact }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1 style={{ fontSize: '2.5rem', margin: '0', color: '#2c3e50' }}>{name}</h1>
      <h3 style={{ color: '#555', marginTop: '5px' }}>{title}</h3>
      <p style={{ fontStyle: 'italic', color: '#7f8c8d' }}>{contact}</p>
    </header>
  );
}

// 2. Component Section (dùng props.children)
function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '25px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ borderBottom: '2px solid #d32f2f', paddingBottom: '10px', color: '#d32f2f', marginTop: '0' }}>
        {title}
      </h2>
      <div style={{ marginTop: '15px' }}>{children}</div>
    </section>
  );
}

// 3. Component SkillList
function SkillList({ skills }) {
  return (
    <ul style={{ lineHeight: '1.8', margin: '0', paddingLeft: '20px' }}>
      {skills.map((skill, index) => (
        <li key={index}>
          <strong>{skill.name}:</strong> {skill.level}
        </li>
      ))}
    </ul>
  );
}

// 4. Component ProjectList
function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#2980b9' }}>{project.name}</h4>
          <p style={{ margin: '0', color: '#333' }}>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

// 5. Component chính
export default function App() {
  const mySkills = [
    { name: 'Lập trình Python (Algorithm, Matrix)', level: 'Thành thạo' },
    { name: 'C/C++ & GDB Debugging', level: 'Khá' },
    { name: 'ReactJS / JavaScript', level: 'Cơ bản' },
    { name: 'Tiếng Anh', level: 'Aptis A2' }
  ];

  const myProjects = [
    { 
      name: 'SmartBin - Hệ thống phân loại rác AI', 
      description: 'Phát triển hệ thống phân loại rác tích hợp YOLO và Flask server.' 
    },
    { 
      name: 'Bomb Lab - Kiến trúc máy tính', 
      description: 'Phân tích mã assembly x86-64 và gỡ lỗi bằng GDB để giải quyết các phase.' 
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <Header 
        name="Chu Hữu Lợi" 
        title="Sinh viên chuyên ngành Trí tuệ nhân tạo vạn vật (AIoT)" 
        contact="Thái Bình | loi@example.com" 
      />

      <Section title="Kỹ năng chuyên môn">
        <SkillList skills={mySkills} />
      </Section>

      <Section title="Dự án nổi bật">
        <ProjectList projects={myProjects} />
      </Section>
    </div>
  );
}
