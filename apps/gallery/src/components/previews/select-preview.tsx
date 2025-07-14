'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export function SelectPreview() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center p-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export function SelectVariantsPreview() {
  const [framework, setFramework] = useState('')
  const [theme, setTheme] = useState('')

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Sizes</h4>
        <div className="flex items-center gap-4">
          <div className="space-y-2">
            <Label size="sm">Small</Label>
            <Select>
              <SelectTrigger size="sm" className="w-[120px]">
                <SelectValue placeholder="Small" />
              </SelectTrigger>
              <SelectContent size="sm">
                <SelectItem value="s1">Option 1</SelectItem>
                <SelectItem value="s2">Option 2</SelectItem>
                <SelectItem value="s3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Default</Label>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="d1">Option 1</SelectItem>
                <SelectItem value="d2">Option 2</SelectItem>
                <SelectItem value="d3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label size="lg">Large</Label>
            <Select>
              <SelectTrigger size="lg" className="w-[180px]">
                <SelectValue placeholder="Large" />
              </SelectTrigger>
              <SelectContent size="lg">
                <SelectItem value="l1">Option 1</SelectItem>
                <SelectItem value="l2">Option 2</SelectItem>
                <SelectItem value="l3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">With Groups and Labels</h4>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="node">Node.js</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="ruby">Ruby</SelectItem>
              <SelectItem value="go">Go</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Database</SelectLabel>
              <SelectItem value="postgres">PostgreSQL</SelectItem>
              <SelectItem value="mysql">MySQL</SelectItem>
              <SelectItem value="mongodb">MongoDB</SelectItem>
              <SelectItem value="redis">Redis</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">States</h4>
        <div className="flex gap-4">
          <div className="space-y-2">
            <Label>Enabled</Label>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Choose option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="opacity-70">Disabled</Label>
            <Select disabled>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Controlled Examples</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Framework (controlled)</Label>
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue.js</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
                <SelectItem value="solid">SolidJS</SelectItem>
              </SelectContent>
            </Select>
            {framework && (
              <p className="text-sm text-muted-foreground">
                Selected framework: {framework}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label>Theme (controlled)</Label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Appearance</SelectLabel>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Colors</SelectLabel>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {theme && (
              <p className="text-sm text-muted-foreground">
                Selected theme: {theme}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Long Lists with Scroll</h4>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Popular</SelectLabel>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>All Countries</SelectLabel>
              <SelectItem value="af">Afghanistan</SelectItem>
              <SelectItem value="al">Albania</SelectItem>
              <SelectItem value="dz">Algeria</SelectItem>
              <SelectItem value="ar">Argentina</SelectItem>
              <SelectItem value="am">Armenia</SelectItem>
              <SelectItem value="at">Austria</SelectItem>
              <SelectItem value="az">Azerbaijan</SelectItem>
              <SelectItem value="bh">Bahrain</SelectItem>
              <SelectItem value="bd">Bangladesh</SelectItem>
              <SelectItem value="by">Belarus</SelectItem>
              <SelectItem value="be">Belgium</SelectItem>
              <SelectItem value="bz">Belize</SelectItem>
              <SelectItem value="bo">Bolivia</SelectItem>
              <SelectItem value="br">Brazil</SelectItem>
              <SelectItem value="bg">Bulgaria</SelectItem>
              <SelectItem value="kh">Cambodia</SelectItem>
              <SelectItem value="cm">Cameroon</SelectItem>
              <SelectItem value="cl">Chile</SelectItem>
              <SelectItem value="cn">China</SelectItem>
              <SelectItem value="co">Colombia</SelectItem>
              <SelectItem value="cr">Costa Rica</SelectItem>
              <SelectItem value="hr">Croatia</SelectItem>
              <SelectItem value="cz">Czech Republic</SelectItem>
              <SelectItem value="dk">Denmark</SelectItem>
              <SelectItem value="ec">Ecuador</SelectItem>
              <SelectItem value="eg">Egypt</SelectItem>
              <SelectItem value="sv">El Salvador</SelectItem>
              <SelectItem value="ee">Estonia</SelectItem>
              <SelectItem value="fi">Finland</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="ge">Georgia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="gh">Ghana</SelectItem>
              <SelectItem value="gr">Greece</SelectItem>
              <SelectItem value="gt">Guatemala</SelectItem>
              <SelectItem value="hn">Honduras</SelectItem>
              <SelectItem value="hu">Hungary</SelectItem>
              <SelectItem value="is">Iceland</SelectItem>
              <SelectItem value="in">India</SelectItem>
              <SelectItem value="id">Indonesia</SelectItem>
              <SelectItem value="ir">Iran</SelectItem>
              <SelectItem value="iq">Iraq</SelectItem>
              <SelectItem value="ie">Ireland</SelectItem>
              <SelectItem value="il">Israel</SelectItem>
              <SelectItem value="it">Italy</SelectItem>
              <SelectItem value="jm">Jamaica</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
              <SelectItem value="jo">Jordan</SelectItem>
              <SelectItem value="kz">Kazakhstan</SelectItem>
              <SelectItem value="ke">Kenya</SelectItem>
              <SelectItem value="kw">Kuwait</SelectItem>
              <SelectItem value="lv">Latvia</SelectItem>
              <SelectItem value="lb">Lebanon</SelectItem>
              <SelectItem value="lt">Lithuania</SelectItem>
              <SelectItem value="lu">Luxembourg</SelectItem>
              <SelectItem value="my">Malaysia</SelectItem>
              <SelectItem value="mx">Mexico</SelectItem>
              <SelectItem value="ma">Morocco</SelectItem>
              <SelectItem value="np">Nepal</SelectItem>
              <SelectItem value="nl">Netherlands</SelectItem>
              <SelectItem value="nz">New Zealand</SelectItem>
              <SelectItem value="ni">Nicaragua</SelectItem>
              <SelectItem value="ng">Nigeria</SelectItem>
              <SelectItem value="no">Norway</SelectItem>
              <SelectItem value="om">Oman</SelectItem>
              <SelectItem value="pk">Pakistan</SelectItem>
              <SelectItem value="pa">Panama</SelectItem>
              <SelectItem value="py">Paraguay</SelectItem>
              <SelectItem value="pe">Peru</SelectItem>
              <SelectItem value="ph">Philippines</SelectItem>
              <SelectItem value="pl">Poland</SelectItem>
              <SelectItem value="pt">Portugal</SelectItem>
              <SelectItem value="qa">Qatar</SelectItem>
              <SelectItem value="ro">Romania</SelectItem>
              <SelectItem value="ru">Russia</SelectItem>
              <SelectItem value="sa">Saudi Arabia</SelectItem>
              <SelectItem value="rs">Serbia</SelectItem>
              <SelectItem value="sg">Singapore</SelectItem>
              <SelectItem value="sk">Slovakia</SelectItem>
              <SelectItem value="si">Slovenia</SelectItem>
              <SelectItem value="za">South Africa</SelectItem>
              <SelectItem value="kr">South Korea</SelectItem>
              <SelectItem value="es">Spain</SelectItem>
              <SelectItem value="lk">Sri Lanka</SelectItem>
              <SelectItem value="se">Sweden</SelectItem>
              <SelectItem value="ch">Switzerland</SelectItem>
              <SelectItem value="tw">Taiwan</SelectItem>
              <SelectItem value="th">Thailand</SelectItem>
              <SelectItem value="tr">Turkey</SelectItem>
              <SelectItem value="ua">Ukraine</SelectItem>
              <SelectItem value="ae">United Arab Emirates</SelectItem>
              <SelectItem value="uy">Uruguay</SelectItem>
              <SelectItem value="uz">Uzbekistan</SelectItem>
              <SelectItem value="ve">Venezuela</SelectItem>
              <SelectItem value="vn">Vietnam</SelectItem>
              <SelectItem value="ye">Yemen</SelectItem>
              <SelectItem value="zm">Zambia</SelectItem>
              <SelectItem value="zw">Zimbabwe</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Form Examples</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">🟢 Low</SelectItem>
                <SelectItem value="medium">🟡 Medium</SelectItem>
                <SelectItem value="high">🟠 High</SelectItem>
                <SelectItem value="urgent">🔴 Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Active</SelectLabel>
                  <SelectItem value="todo">📝 To Do</SelectItem>
                  <SelectItem value="progress">⚡ In Progress</SelectItem>
                  <SelectItem value="review">👀 In Review</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Completed</SelectLabel>
                  <SelectItem value="done">✅ Done</SelectItem>
                  <SelectItem value="archived">📦 Archived</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}